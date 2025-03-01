import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, SafeAreaView, ScrollView } from 'react-native';
import Header from '../components/Header';
import { caracteristicasClaves, getSiguientePregunta, getTaxonById } from '../data/taxonomia';

const IncognitaScreen = ({ navigation }) => {
    const [preguntaActual, setPreguntaActual] = useState(caracteristicasClaves[0]);
    const [resultado, setResultado] = useState(null);
    const [historial, setHistorial] = useState([]);

    const handleRespuesta = (respuesta) => {
        // Guardar la pregunta actual y la respuesta en el historial
        setHistorial([...historial, {
            pregunta: preguntaActual.pregunta,
            respuesta
        }]);

        // Obtener la siguiente pregunta o resultado
        const siguiente = getSiguientePregunta(preguntaActual.id, respuesta);

        if (!siguiente) {
            // Si no hay siguiente paso, algo salió mal
            return;
        }

        if (siguiente.tipo === 'resultado') {
            // Si llegamos a un resultado, obtener la información del taxón
            const taxonEncontrado = getTaxonById(siguiente.id);
            setResultado(taxonEncontrado);
        } else if (siguiente.tipo === 'pregunta') {
            // Si hay otra pregunta, buscarla y mostrarla
            // Si hay otra pregunta, buscarla y mostrarla
            const nuevaPregunta = caracteristicasClaves.find(p => p.id === siguiente.id);
            if (nuevaPregunta) {
                setPreguntaActual(nuevaPregunta);
            }
        }
    };

    const reiniciar = () => {
        setPreguntaActual(caracteristicasClaves[0]);
        setResultado(null);
        setHistorial([]);
    };

    const volverAtras = () => {
        if (historial.length === 0) {
            return;
        }

        // Eliminar la última entrada del historial
        const nuevoHistorial = [...historial];
        nuevoHistorial.pop();
        setHistorial(nuevoHistorial);

        // Si ya no hay historial, volver a la primera pregunta
        if (nuevoHistorial.length === 0) {
            setPreguntaActual(caracteristicasClaves[0]);
            setResultado(null);
            return;
        }

        // Reconstruir el estado desde el principio hasta la pregunta anterior
        let preguntaId = caracteristicasClaves[0].id;

        for (let i = 0; i < nuevoHistorial.length - 1; i++) {
            const respuesta = nuevoHistorial[i].respuesta;
            const siguiente = getSiguientePregunta(preguntaId, respuesta);
            if (siguiente && siguiente.tipo === 'pregunta') {
                preguntaId = siguiente.id;
            }
        }

        // Establecer la pregunta anterior
        const preguntaAnterior = caracteristicasClaves.find(p => p.id === preguntaId);
        if (preguntaAnterior) {
            setPreguntaActual(preguntaAnterior);
            setResultado(null);
        }
    };

    return (
        <SafeAreaView style={styles.container}>
            <Header />
            <View style={styles.backButtonContainer}>
                <TouchableOpacity
                    style={styles.backButton}
                    onPress={() => navigation.goBack()}
                >
                    <Text style={styles.backButtonText}>← Volver</Text>
                </TouchableOpacity>
            </View>

            <ScrollView contentContainerStyle={styles.content}>
                <Text style={styles.title}>Identificar Incógnita</Text>

                {/* Historial de respuestas */}
                {historial.length > 0 && (
                    <View style={styles.historialContainer}>
                        <Text style={styles.historialTitle}>Historial:</Text>
                        {historial.map((item, index) => (
                            <View key={index} style={styles.historialItem}>
                                <Text style={styles.historialPregunta}>{item.pregunta}</Text>
                                <Text style={styles.historialRespuesta}>Respuesta: {item.respuesta}</Text>
                            </View>
                        ))}
                    </View>
                )}

                {/* Mostrar resultado si existe */}
                {resultado ? (
                    <View style={styles.resultadoContainer}>
                        <Text style={styles.resultadoTitle}>Resultado:</Text>
                        <Text style={styles.resultadoTaxon}>{resultado.nombre}</Text>
                        <Text style={styles.resultadoTipo}>Tipo: {resultado.tipo.charAt(0).toUpperCase() + resultado.tipo.slice(1)}</Text>

                        <Text style={styles.caracteristicasTitle}>Características:</Text>
                        {resultado.caracteristicas.map((caract, index) => (
                            <Text key={index} style={styles.caracteristica}>• {caract}</Text>
                        ))}

                        <TouchableOpacity
                            style={styles.botonPrimario}
                            onPress={() => navigation.navigate('Detail', {
                                item: resultado,
                                title: resultado.nombre,
                                type: resultado.tipo
                            })}
                        >
                            <Text style={styles.botonPrimarioText}>Ver detalles</Text>
                        </TouchableOpacity>

                        <TouchableOpacity
                            style={styles.botonSecundario}
                            onPress={reiniciar}
                        >
                            <Text style={styles.botonSecundarioText}>Comenzar de nuevo</Text>
                        </TouchableOpacity>
                    </View>
                ) : (
                    <View style={styles.preguntaContainer}>
                        <Text style={styles.pregunta}>{preguntaActual.pregunta}</Text>

                        {preguntaActual.opciones.map((opcion, index) => (
                            <TouchableOpacity
                                key={index}
                                style={styles.opcion}
                                onPress={() => handleRespuesta(opcion.texto)}
                            >
                                <Text style={styles.opcionText}>{opcion.texto}</Text>
                            </TouchableOpacity>
                        ))}

                        {historial.length > 0 && (
                            <TouchableOpacity
                                style={styles.botonSecundario}
                                onPress={volverAtras}
                            >
                                <Text style={styles.botonSecundarioText}>Volver atrás</Text>
                            </TouchableOpacity>
                        )}
                    </View>
                )}
            </ScrollView>
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#f5f5f5',
    },
    backButtonContainer: {
        padding: 10,
    },
    backButton: {
        padding: 8,
    },
    backButtonText: {
        color: '#2980b9',
        fontSize: 16,
    },
    content: {
        padding: 20,
        paddingBottom: 40,
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 20,
        textAlign: 'center',
    },
    historialContainer: {
        marginBottom: 20,
        padding: 10,
        backgroundColor: '#f0f0f0',
        borderRadius: 8,
    },
    historialTitle: {
        fontSize: 16,
        fontWeight: 'bold',
        marginBottom: 10,
    },
    historialItem: {
        marginBottom: 8,
        paddingLeft: 10,
        borderLeftWidth: 2,
        borderLeftColor: '#2980b9',
    },
    historialPregunta: {
        fontSize: 14,
        fontWeight: '500',
    },
    historialRespuesta: {
        fontSize: 14,
        fontStyle: 'italic',
        color: '#555',
    },
    preguntaContainer: {
        backgroundColor: 'white',
        padding: 15,
        borderRadius: 10,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.1,
        shadowRadius: 4,
        elevation: 3,
    },
    pregunta: {
        fontSize: 18,
        fontWeight: 'bold',
        marginBottom: 20,
        textAlign: 'center',
    },
    opcion: {
        backgroundColor: '#2980b9',
        padding: 15,
        borderRadius: 8,
        marginBottom: 10,
    },
    opcionText: {
        color: 'white',
        fontSize: 16,
        textAlign: 'center',
    },
    resultadoContainer: {
        backgroundColor: 'white',
        padding: 15,
        borderRadius: 10,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.1,
        shadowRadius: 4,
        elevation: 3,
    },
    resultadoTitle: {
        fontSize: 18,
        fontWeight: 'bold',
        marginBottom: 10,
    },
    resultadoTaxon: {
        fontSize: 22,
        fontWeight: 'bold',
        color: '#2980b9',
        marginBottom: 5,
    },
    resultadoTipo: {
        fontSize: 16,
        fontStyle: 'italic',
        color: '#555',
        marginBottom: 15,
    },
    caracteristicasTitle: {
        fontSize: 16,
        fontWeight: 'bold',
        marginTop: 10,
        marginBottom: 10,
    },
    caracteristica: {
        fontSize: 14,
        marginBottom: 5,
        paddingLeft: 10,
    },
    botonPrimario: {
        backgroundColor: '#2980b9',
        padding: 15,
        borderRadius: 8,
        marginTop: 20,
        alignItems: 'center',
    },
    botonPrimarioText: {
        color: 'white',
        fontSize: 16,
        fontWeight: 'bold',
    },
    botonSecundario: {
        backgroundColor: '#f0f0f0',
        padding: 15,
        borderRadius: 8,
        marginTop: 10,
        alignItems: 'center',
    },
    botonSecundarioText: {
        color: '#555',
        fontSize: 16,
    },
});

export default IncognitaScreen;

