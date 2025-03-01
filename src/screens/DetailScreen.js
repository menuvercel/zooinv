import React, { useState, useCallback, useRef } from 'react';
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
    BackHandler,
    FlatList
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
    const [currentImageIndex, setCurrentImageIndex] = useState(0);
    const flatListRef = useRef(null);
    
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

    // Función para renderizar cada imagen del slider
    const renderImageItem = ({ item: image, index }) => (
        <View style={styles.imagenContainer}>
            <Image
                source={image}
                style={styles.imagen}
                resizeMode="cover"
            />
            <LinearGradient
                colors={['transparent', 'rgba(255,255,255,0.9)', '#ffffff']}
                style={styles.imageGradient}
            />
        </View>
    );
    
    // Función para manejar el cambio de imagen
    const handleImageChange = (event) => {
        if (!event || !event.nativeEvent) return;
        
        const slideWidth = width;
        const offset = event.nativeEvent.contentOffset.x;
        const slideIndex = Math.round(offset / slideWidth);
        
        if (slideIndex !== currentImageIndex) {
            setCurrentImageIndex(slideIndex);
        }
    };
    
    // Función para renderizar los indicadores de página
    const renderPaginationDots = () => {
        const images = item?.imagenes || [];
        if (images.length <= 1) return null;
        
        return (
            <View style={styles.paginationContainer}>
                {images.map((_, index) => (
                    <View
                        key={index}
                        style={[
                            styles.paginationDot,
                            { opacity: index === currentImageIndex ? 1 : 0.5 }
                        ]}
                    />
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

    // Preparar las imágenes para el slider
    const images = item.imagenes || (item.imagen ? [item.imagen] : []);

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
                {/* Slider de imágenes */}
                {images.length > 0 && (
                    <View>
                        <FlatList
                            ref={flatListRef}
                            data={images}
                            renderItem={renderImageItem}
                            keyExtractor={(_, index) => index.toString()}
                            horizontal
                            pagingEnabled
                            showsHorizontalScrollIndicator={false}
                            onMomentumScrollEnd={handleImageChange}
                            onScroll={Animated.event(
                                [{ nativeEvent: { contentOffset: { x: new Animated.Value(0) } } }],
                                { 
                                    useNativeDriver: false,
                                    listener: (event) => {
                                        // Actualizar el índice durante el desplazamiento también
                                        const slideWidth = width;
                                        const offset = event.nativeEvent.contentOffset.x;
                                        const slideIndex = Math.round(offset / slideWidth);
                                        
                                        if (slideIndex !== currentImageIndex && slideIndex >= 0 && slideIndex < images.length) {
                                            setCurrentImageIndex(slideIndex);
                                        }
                                    }
                                }
                            )}
                            scrollEventThrottle={16}
                            style={styles.imageSlider}
                        />
                        {renderPaginationDots()}
                        {images.length > 1 && (
                            <View style={styles.imageCounter}>
                                <Text style={styles.imageCounterText}>
                                    {currentImageIndex + 1}/{images.length}
                                </Text>
                            </View>
                        )}
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
    imageSlider: {
        width: width,
    },
    paginationContainer: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        position: 'absolute',
        bottom: 10,
        width: '100%',
    },
    paginationDot: {
        width: 8,
        height: 8,
        borderRadius: 4,
        backgroundColor: 'white',
        marginHorizontal: 4,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 1 },
        shadowOpacity: 0.3,
        shadowRadius: 2,
    },
    imageCounter: {
        position: 'absolute',
        top: 10,
        right: 10,
        backgroundColor: 'rgba(0, 0, 0, 0.6)',
        paddingHorizontal: 10,
        paddingVertical: 5,
        borderRadius: 15,
    },
    imageCounterText: {
        color: 'white',
        fontSize: 14,
        fontWeight: 'bold',
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