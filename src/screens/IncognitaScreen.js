import React, { useState } from 'react';
import { 
    View, 
    Text, 
    StyleSheet, 
    TouchableOpacity, 
    SafeAreaView, 
    ScrollView,
    StatusBar,
    Dimensions,
    Animated
} from 'react-native';
import Header from '../components/Header';
import { caracteristicasClaves, getSiguientePregunta, getTaxonById } from '../data/taxonomia';
import { LinearGradient } from 'expo-linear-gradient';

const { width } = Dimensions.get('window');

const IncognitaScreen = ({ navigation }) => {
    const [preguntaActual, setPreguntaActual] = useState(caracteristicasClaves[0]);
    const [resultado, setResultado] = useState(null);
    const [historial, setHistorial] = useState([]);
    const [scrollY] = useState(new Animated.Value(0));

    // Animación para la línea separadora
    const headerLineOpacity = scrollY.interpolate({
        inputRange: [0, 20],
        outputRange: [1, 0.7],
        extrapolate: 'clamp'
    });

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
            <StatusBar barStyle="light-content" backgroundColor="#121212" />
            
            {/* Header simplificado con línea delgada */}
            <View style={styles.headerContainer}>
                <View style={styles.headerContent}>
                    <TouchableOpacity
                        style={styles.backButton}
                        onPress={() => navigation.goBack()}
                    >
                        <Text style={styles.backButtonText}>←</Text>
                    </TouchableOpacity>
                    <Text style={styles.headerTitle}>Identificar Incógnita</Text>
                </View>
                <Animated.View 
                    style={[
                        styles.headerLine, 
                        { opacity: headerLineOpacity }
                    ]} 
                />
            </View>

            <Animated.ScrollView 
                contentContainerStyle={styles.content}
                onScroll={Animated.event(
                    [{ nativeEvent: { contentOffset: { y: scrollY } } }],
                    { useNativeDriver: false }
                )}
                scrollEventThrottle={16}
                showsVerticalScrollIndicator={false}
            >
                {/* Historial de respuestas */}
                {historial.length > 0 && (
                    <View style={styles.historialContainer}>
                        <Text style={styles.seccionTitulo}>Historial</Text>
                        {historial.map((item, index) => (
                            <View key={index} style={styles.historialItem}>
                                <Text style={styles.historialNumero}>{index + 1}</Text>
                                <View style={styles.historialContenido}>
                                    <Text style={styles.historialPregunta}>{item.pregunta}</Text>
                                    <Text style={styles.historialRespuesta}>{item.respuesta}</Text>
                                </View>
                            </View>
                        ))}
                    </View>
                )}

                {/* Mostrar resultado si existe */}
                {resultado ? (
                    <View style={styles.resultadoContainer}>
                        <LinearGradient
                            colors={['#1E1E1E', '#2A2D3E']}
                            style={styles.resultadoGradient}
                        >
                            <Text style={styles.resultadoTaxon}>{resultado.nombre}</Text>
                            <Text style={styles.resultadoTipo}>{resultado.tipo.charAt(0).toUpperCase() + resultado.tipo.slice(1)}</Text>

                            <View style={styles.seccion}>
                                <Text style={styles.seccionTitulo}>Características</Text>
                                <View style={styles.caracteristicasContainer}>
                                    {resultado.caracteristicas.map((caract, index) => (
                                        <View key={index} style={styles.caracteristicaCard}>
                                            <Text style={styles.caracteristicaNumero}>{index + 1}</Text>
                                            <Text style={styles.caracteristicaTexto}>{caract}</Text>
                                        </View>
                                    ))}
                                </View>
                            </View>

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
                        </LinearGradient>
                    </View>
                ) : (
                    <View style={styles.preguntaContainer}>
                        <Text style={styles.pregunta}>{preguntaActual.pregunta}</Text>

                        <View style={styles.opcionesContainer}>
                            {preguntaActual.opciones.map((opcion, index) => (
                                <TouchableOpacity
                                    key={index}
                                    style={styles.opcion}
                                    onPress={() => handleRespuesta(opcion.texto)}
                                >
                                    <Text style={styles.opcionText}>{opcion.texto}</Text>
                                </TouchableOpacity>
                            ))}
                        </View>

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
            </Animated.ScrollView>
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#121212',
    },
    headerContainer: {
        height: 60,
        width: '100%',
        backgroundColor: '#1E1E1E',
        justifyContent: 'center',
        alignItems: 'center',
        zIndex: 10,
    },
    headerContent: {
        width: '100%',
        height: '100%',
        flexDirection: 'row',
        alignItems: 'center',
        paddingHorizontal: 20,
    },
    headerLine: {
        position: 'absolute',
        bottom: 0,
        width: '70%',
        height: 1.5,
        backgroundColor: '#2A2D3E',
        alignSelf: 'center',
    },
    headerTitle: {
        fontSize: 26,
        fontWeight: 'bold',
        color: '#FFFFFF',
        flex: 1,
        textAlign: 'center',
        marginRight: 30, // Compensar el espacio del botón de regreso
    },
    backButton: {
        width: 40,
        height: 40,
        borderRadius: 20,
        backgroundColor: 'rgba(255,255,255,0.1)',
        justifyContent: 'center',
        alignItems: 'center',
    },
    backButtonText: {
        fontSize: 24,
        color: '#FFFFFF',
    },
    content: {
        paddingHorizontal: 20,
        paddingBottom: 30,
    },
    historialContainer: {
        marginBottom: 25,
        marginTop: 10,
    },
    historialItem: {
        flexDirection: 'row',
        alignItems: 'flex-start',
        marginBottom: 15,
        backgroundColor: '#2A2D3E',
        borderRadius: 12,
        padding: 16,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.25,
        shadowRadius: 3,
        elevation: 2,
    },
    historialNumero: {
        width: 26,
        height: 26,
        borderRadius: 13,
        backgroundColor: '#A0E7E5',
        color: '#121212',
        textAlign: 'center',
        lineHeight: 26,
        fontSize: 14,
        fontWeight: 'bold',
        marginRight: 12,
    },
    historialContenido: {
        flex: 1,
    },
    historialPregunta: {
        fontSize: 16,
        fontWeight: '500',
        color: '#FFFFFF',
        marginBottom: 4,
    },
    historialRespuesta: {
        fontSize: 15,
        color: '#A0E7E5',
    },
    preguntaContainer: {
        backgroundColor: '#1E1E1E',
        borderRadius: 12,
        padding: 20,
        marginTop: 10,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.25,
        shadowRadius: 5,
        elevation: 2,
    },
    pregunta: {
        fontSize: 22,
        fontWeight: 'bold',
        marginBottom: 25,
        color: '#FFFFFF',
        textAlign: 'center',
    },
    opcionesContainer: {
        marginBottom: 15,
    },
    opcion: {
        backgroundColor: '#2A2D3E',
        padding: 16,
        borderRadius: 12,
        marginBottom: 12,
        borderWidth: 1,
        borderColor: 'rgba(160, 231, 229, 0.2)',
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 1 },
        shadowOpacity: 0.25,
        shadowRadius: 2,
        elevation: 1,
    },
    opcionText: {
        color: '#FFFFFF',
        fontSize: 17,
        textAlign: 'center',
    },
    resultadoContainer: {
        borderRadius: 12,
        overflow: 'hidden',
        marginTop: 10,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.25,
        shadowRadius: 5,
        elevation: 2,
    },
    resultadoGradient: {
        padding: 20,
        backgroundColor: '#1E1E1E',
    },
    resultadoTaxon: {
        fontSize: 32,
        fontWeight: 'bold',
        marginBottom: 5,
        color: '#FFFFFF',
    },
    resultadoTipo: {
        fontSize: 18,
        fontStyle: 'italic',
        color: '#A0E7E5',
        marginBottom: 25,
    },
    seccion: {
        backgroundColor: '#2A2D3E',
        marginBottom: 25,
        borderRadius: 12,
        padding: 16,
    },
    seccionTitulo: {
        fontSize: 22,
        fontWeight: 'bold',
        marginBottom: 20,
        color: '#FFFFFF',
        borderLeftWidth: 4,
        borderLeftColor: '#A0E7E5',
        paddingLeft: 10,
    },
    caracteristicasContainer: {
        marginBottom: 10,
    },
    caracteristicaCard: {
        flexDirection: 'row',
        alignItems: 'flex-start',
        marginBottom: 15,
        backgroundColor: 'rgba(160, 231, 229, 0.15)',
        borderRadius: 12,
        padding: 16,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.25,
        shadowRadius: 3,
        elevation: 2,
    },
    caracteristicaNumero: {
        width: 26,
        height: 26,
        borderRadius: 13,
        backgroundColor: '#A0E7E5',
        color: '#121212',
        textAlign: 'center',
        lineHeight: 26,
        fontSize: 14,
        fontWeight: 'bold',
        marginRight: 12,
    },
    caracteristicaTexto: {
        flex: 1,
        fontSize: 16,
        lineHeight: 24,
        color: '#FFFFFF',
    },
    botonPrimario: {
        backgroundColor: '#A0E7E5',
        padding: 16,
        borderRadius: 12,
        marginTop: 20,
        alignItems: 'center',
    },
    botonPrimarioText: {
        color: '#121212',
        fontSize: 17,
        fontWeight: 'bold',
    },
    botonSecundario: {
        backgroundColor: 'rgba(160, 231, 229, 0.15)',
        padding: 16,
        borderRadius: 12,
        marginTop: 12,
        alignItems: 'center',
        borderWidth: 1,
        borderColor: 'rgba(160, 231, 229, 0.3)',
    },
    botonSecundarioText: {
        color: '#A0E7E5',
        fontSize: 17,
    },
});

export default IncognitaScreen;
