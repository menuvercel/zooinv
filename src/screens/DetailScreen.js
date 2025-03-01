import React, { useState, useCallback } from 'react';
import { 
    View, 
    Text, 
    StyleSheet, 
    Image, 
    SafeAreaView,
    StatusBar,
    Animated,
    Dimensions,
    TouchableOpacity,
    BackHandler
} from 'react-native';
import { 
    getClasesByFiloId, 
    getSubclasesByClaseId, 
    getOrdenesBySubclaseId, 
    filos 
} from '../data/taxonomia';
import { LinearGradient } from 'expo-linear-gradient';
import { useFocusEffect } from '@react-navigation/native';

const { width } = Dimensions.get('window');

const DetailScreen = ({ route, navigation }) => {
    const { item, type, title, parentFiloId } = route.params;
    const [scrollY] = useState(new Animated.Value(0));
    
    // Controlamos el botón de atrás físico del dispositivo
    useFocusEffect(
        useCallback(() => {
            const onBackPress = () => {
                // Determinamos el taxón padre según el tipo actual
                if (type === 'orden') {
                    // Si estamos en un orden, volvemos a la subclase
                    const filoId = item?.filoId || parentFiloId;
                    const claseId = item?.claseId;
                    const subclaseId = item?.subclaseId;
                    
                    if (filoId && claseId && subclaseId) {
                        // Buscamos la subclase padre
                        const clases = getClasesByFiloId(filoId);
                        const clase = clases.find(c => c.id === claseId);
                        
                        if (clase) {
                            const subclases = getSubclasesByClaseId(filoId, claseId);
                            const subclase = subclases.find(sc => sc.id === subclaseId);
                            
                            if (subclase) {
                                navigation.navigate('Detail', {
                                    item: subclase,
                                    type: 'subclase',
                                    title: subclase.nombre,
                                    parentFiloId: filoId
                                });
                                return true;
                            }
                        }
                    }
                } else if (type === 'subclase') {
                    // Si estamos en una subclase, volvemos a la clase
                    const filoId = item?.filoId || parentFiloId;
                    const claseId = item?.claseId;
                    
                    if (filoId && claseId) {
                        // Buscamos la clase padre
                        const clases = getClasesByFiloId(filoId);
                        const clase = clases.find(c => c.id === claseId);
                        
                        if (clase) {
                            navigation.navigate('Detail', {
                                item: clase,
                                type: 'clase',
                                title: clase.nombre,
                                parentFiloId: filoId
                            });
                            return true;
                        }
                    }
                } else if (type === 'clase') {
                    // Si estamos en una clase, volvemos al filo
                    const filoId = item?.filoId || parentFiloId;
                    
                    if (filoId) {
                        // Buscamos el filo padre
                        const filoPadre = filos.find(f => f.id === filoId);
                        
                        if (filoPadre) {
                            navigation.navigate('Detail', {
                                item: filoPadre,
                                type: 'filo',
                                title: filoPadre.nombre
                            });
                            return true;
                        }
                    }
                }
                
                return false; // Permite el comportamiento predeterminado (volver)
            };

            // Añadimos el listener para el botón de atrás
            BackHandler.addEventListener('hardwareBackPress', onBackPress);

            // Limpieza al desmontar
            return () => BackHandler.removeEventListener('hardwareBackPress', onBackPress);
        }, [item, type, navigation, parentFiloId])
    );
    
    // Animación para la línea separadora
    const headerLineOpacity = scrollY.interpolate({
        inputRange: [0, 20],
        outputRange: [1, 0.7],
        extrapolate: 'clamp'
    });

    // Función para renderizar las características con estilo moderno
    const renderCaracteristicas = () => {
        // Verificar que item.caracteristicas existe y es un array
        if (!item?.caracteristicas || !Array.isArray(item.caracteristicas)) {
            return null;
        }

        return (
            <View style={styles.seccion}>
                <Text style={styles.seccionTitulo}>Características</Text>
                <View style={styles.caracteristicasContainer}>
                    {item.caracteristicas.map((caracteristica, index) => (
                        <View key={index} style={styles.caracteristicaCard}>
                            <Text style={styles.caracteristicaNumero}>{index + 1}</Text>
                            <Text style={styles.caracteristicaTexto}>
                                {caracteristica}
                            </Text>
                        </View>
                    ))}
                </View>
            </View>
        );
    };

    // Función para renderizar los taxones hijos
    const renderTaxonesHijos = () => {
        let taxonesHijos = [];
        let tipoHijo = '';

        // Verificar que item existe
        if (!item) {
            return null;
        }

        if (type === 'filo' && item.tieneClases) {
            taxonesHijos = getClasesByFiloId(item.id);
            tipoHijo = 'clase';
        } else if (type === 'clase' && item.tieneSubclases) {
            taxonesHijos = getSubclasesByClaseId(item.filoId, item.id);
            tipoHijo = 'subclase';
        } else if (type === 'subclase' && item.tieneOrdenes) {
            taxonesHijos = getOrdenesBySubclaseId(item.filoId, item.claseId, item.id);
            tipoHijo = 'orden';
        }

        // Verificar que taxonesHijos es un array y tiene elementos
        if (!Array.isArray(taxonesHijos) || taxonesHijos.length === 0) {
            return null;
        }

        const titulo = type === 'filo' ? 'Clases' :
            type === 'clase' ? 'Subclases' : 'Órdenes';

        return (
            <View style={styles.seccion}>
                <Text style={styles.seccionTitulo}>{titulo}</Text>
                {taxonesHijos.map((taxon, index) => (
                    <TouchableOpacity
                        key={index}
                        style={styles.taxonHijo}
                        onPress={() => navigation.navigate('Detail', {
                            item: taxon,
                            title: taxon.nombre,
                            type: tipoHijo,
                            parentFiloId: item.filoId || (type === 'filo' ? item.id : parentFiloId)
                        })}
                    >
                        <Text style={styles.taxonHijoNombre}>{taxon.nombre}</Text>
                    </TouchableOpacity>
                ))}
            </View>
        );
    };

    // Verificar que item existe antes de renderizar
    if (!item) {
        return (
            <SafeAreaView style={[styles.container, styles.errorContainer]}>
                <Text style={styles.errorText}>No se pudo cargar la información</Text>
            </SafeAreaView>
        );
    }

    return (
        <SafeAreaView style={styles.container}>
            <StatusBar barStyle="dark-content" backgroundColor="#ffffff" />
            
            {/* Header simplificado con línea delgada */}
            <View style={styles.headerContainer}>
                <View style={styles.headerContent}>
                    <Text style={styles.headerTitle}>{title || type.charAt(0).toUpperCase() + type.slice(1)}</Text>
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
                {/* Imagen grande que sale de los bordes */}
                {item.imagen && (
                    <View style={styles.imagenContainer}>
                        <Image
                            source={item.imagen}
                            style={styles.imagen}
                            resizeMode="cover"
                        />
                        <LinearGradient
                            colors={['transparent', 'rgba(255,255,255,0.9)', '#ffffff']}
                            style={styles.imageGradient}
                        />
                    </View>
                )}

                <View style={styles.infoContainer}>
                    <Text style={styles.titulo}>{item.nombre}</Text>
                    <Text style={styles.tipo}>{type.charAt(0).toUpperCase() + type.slice(1)}</Text>

                    {renderCaracteristicas()}
                    {renderTaxonesHijos()}
                </View>
            </Animated.ScrollView>
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#ffffff',
    },
    errorContainer: {
        justifyContent: 'center',
        alignItems: 'center',
    },
    errorText: {
        fontSize: 18,
        color: '#666',
    },
    headerContainer: {
        height: 60,
        width: '100%',
        backgroundColor: '#ffffff',
        justifyContent: 'center',
        alignItems: 'center',
        zIndex: 10,
    },
    headerContent: {
        width: '100%',
        height: '100%',
        justifyContent: 'center',
        alignItems: 'center',
    },
    headerLine: {
        position: 'absolute',
        bottom: 0,
        width: '70%',
        height: 1.5,
        backgroundColor: '#CCCCCC',
        alignSelf: 'center',
    },
    headerTitle: {
        fontSize: 26,
        fontWeight: 'bold',
        color: '#333333',
    },
    content: {
        paddingBottom: 30,
    },
    imagenContainer: {
        width: width,
        height: 380,
        marginBottom: 0,
        position: 'relative',
    },
    imagen: {
        width: width,
        height: 380,
    },
    imageGradient: {
        position: 'absolute',
        bottom: 0,
        left: 0,
        right: 0,
        height: 50,
    },
    infoContainer: {
        paddingHorizontal: 20,
    },
    titulo: {
        fontSize: 32,
        fontWeight: 'bold',
        marginBottom: 5,
        color: '#222',
    },
    tipo: {
        fontSize: 18,
        fontStyle: 'italic',
        color: '#666',
        marginBottom: 25,
    },
    seccion: {
        backgroundColor: 'white',
        marginBottom: 30,
        borderRadius: 12,
    },
    seccionTitulo: {
        fontSize: 22,
        fontWeight: 'bold',
        marginBottom: 20,
        color: 'black',
        borderLeftWidth: 4,
        borderLeftColor: 'black',
        paddingLeft: 10,
    },
    caracteristicasContainer: {
        marginBottom: 10,
    },
    caracteristicaCard: {
        flexDirection: 'row',
        alignItems: 'flex-start',
        marginBottom: 15,
        backgroundColor: '#f8f9fa',
        borderRadius: 12,
        padding: 16,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.05,
        shadowRadius: 3,
        elevation: 2,
    },
    caracteristicaNumero: {
        width: 26,
        height: 26,
        borderRadius: 13,
        backgroundColor: 'black',
        color: 'white',
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
        color: '#333',
    },
    taxonHijo: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingVertical: 16,
        paddingHorizontal: 12,
        borderBottomWidth: 1,
        borderBottomColor: '#f0f0f0',
    },
    taxonHijoNombre: {
        fontSize: 17,
        fontWeight: '500',
        color: '#333',
        width: '100%', // Asegura que el área tocable ocupe todo el ancho
    },
});

export default DetailScreen;