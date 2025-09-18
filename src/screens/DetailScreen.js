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
import { Ionicons } from '@expo/vector-icons';
import { useFavorites } from '../context/FavoritesContext';
import { getImageById } from '../utils/imageUtils';

const { width } = Dimensions.get('window');

const DetailScreen = ({ route, navigation }) => {
    const { item, type, title, parentFiloId, fromSearch, lastQuery } = route.params;
    const [scrollY] = useState(new Animated.Value(0));
    const [currentImageIndex, setCurrentImageIndex] = useState(0);
    const flatListRef = useRef(null);

    // Acceder al contexto de favoritos
    const { isFavorite, addFavorite, removeFavorite } = useFavorites();

    // Verificar si este taxón está en favoritos
    const isCurrentFavorite = isFavorite(item.id, type);

    // Función para alternar el estado de favorito
    const toggleFavorite = () => {
        if (isCurrentFavorite) {
            removeFavorite(item.id, type);
        } else {
            // Creamos un objeto con la información necesaria del taxón
            // Sin incluir las referencias directas a imágenes
            const taxonToSave = {
                ...item,
                tipo: type,
                title: title,
                // Almacenamos solo datos básicos, no las referencias a imágenes
                // Las imágenes se cargarán después usando imageUtils
                imagenId: item.id,
                nombreTaxon: item.nombre
            };

            // Guardar el taxón (sin las referencias directas a imágenes)
            addFavorite(taxonToSave);
        }
    };

    // Controlamos el botón de atrás físico del dispositivo
    useFocusEffect(
        useCallback(() => {
            const onBackPress = () => {
                if (fromSearch) {
                    // Si venimos de la búsqueda, volvemos a la pantalla de búsqueda con la consulta original
                    navigation.navigate('Search', {
                        lastQuery: lastQuery, // Restauramos la consulta
                        fromDetail: true, // Indicamos que venimos de DetailScreen
                        timestamp: new Date().getTime() // Añadir timestamp para asegurar cambio en params
                    });
                    return true;
                } else if (route.params?.fromSaved) {
                    // Si venimos de la pantalla de Guardados, volvemos a ella
                    navigation.reset({
                        index: 1,
                        routes: [
                            { name: 'Home' },
                            { name: 'Saved' }
                        ],
                    });
                    return true;
                } else if (type === 'orden') {
                    // Si estamos en un orden, volvemos a la subclase o clase según corresponda
                    const filoId = item?.filoId || parentFiloId;
                    const claseId = item?.claseId;
                    const subclaseId = item?.subclaseId;

                    if (filoId && claseId) {
                        // Buscamos la clase padre
                        const clases = getClasesByFiloId(filoId);
                        const clase = clases.find(c => c.id === claseId);

                        if (clase) {
                            if (subclaseId) {
                                // Si hay subclaseId, navegamos a la subclase
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
                            } else {
                                // Si no hay subclaseId, navegamos directamente a la clase
                                navigation.navigate('Detail', {
                                    item: clase,
                                    type: 'clase',
                                    title: clase.nombre,
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

            // ✅ NUEVA API - Correcto
            const backHandler = BackHandler.addEventListener('hardwareBackPress', onBackPress);

            // ✅ NUEVA API - Correcto
            return () => backHandler.remove();
        }, [navigation, route.params, type, item, parentFiloId, fromSearch, lastQuery])
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
                    {item.caracteristicas.map((caracteristica, index) => {
                        const esSuficiente = caracteristica.includes('(Suficiente)');
                        const textoSinSuficiente = caracteristica.replace('(Suficiente)', '').trim();

                        return (
                            <View
                                key={index}
                                style={[
                                    styles.caracteristicaCard,
                                    esSuficiente && styles.caracteristicaCardSuficiente
                                ]}
                            >
                                <Text style={[
                                    styles.caracteristicaNumero,
                                    esSuficiente && styles.caracteristicaNumeroSuficiente
                                ]}>
                                    {index + 1}
                                </Text>
                                <View style={styles.caracteristicaContenido}>
                                    <Text style={[
                                        styles.caracteristicaTexto,
                                        esSuficiente && styles.caracteristicaTextoSuficiente
                                    ]}>
                                        {textoSinSuficiente}
                                    </Text>
                                    {esSuficiente && (
                                        <Text style={styles.suficienteTag}>Suficiente</Text>
                                    )}
                                </View>
                            </View>
                        );
                    })}
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
        } else if (type === 'clase') {
            if (item.tieneSubclases) {
                taxonesHijos = getSubclasesByClaseId(item.filoId, item.id);
                tipoHijo = 'subclase';
            } else if (item.tieneOrdenes) {
                taxonesHijos = getOrdenesBySubclaseId(item.filoId, item.id);
                tipoHijo = 'orden';
            }
        } else if (type === 'subclase' && item.tieneOrdenes) {
            taxonesHijos = getOrdenesBySubclaseId(item.filoId, item.claseId, item.id);
            tipoHijo = 'orden';
        }

        // Verificar que taxonesHijos es un array y tiene elementos
        if (!Array.isArray(taxonesHijos) || taxonesHijos.length === 0) {
            return null;
        }

        const titulo = type === 'filo' ? 'Clases' :
            type === 'clase' ? (item.tieneSubclases ? 'Subclases' : 'Órdenes') : 'Órdenes';

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
                source={image || require('../../assets/images/placeholder.png')}
                style={styles.imagen}
                resizeMode="cover"
                defaultSource={require('../../assets/images/placeholder.png')}
                // Añadir fallback en caso de error de carga de imagen
                onError={(e) => {
                    console.log('Error al cargar imagen en slider:', e.nativeEvent.error);
                }}
            />
            <LinearGradient
                colors={['transparent', 'rgba(18,18,18,0.7)', '#121212']}
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

    // Añadir botón de retroceso en la interfaz
    const renderBackButton = () => (
        <TouchableOpacity
            style={styles.backButton}
            onPress={() => {
                if (fromSearch) {
                    // Si venimos de la búsqueda, volvemos a la pantalla de búsqueda con la consulta original
                    navigation.navigate('Search', {
                        lastQuery: lastQuery,
                        fromDetail: true,
                        timestamp: new Date().getTime() // Añadir timestamp para asegurar cambio en params
                    });
                } else if (route.params?.fromSaved) {
                    // Si venimos de la pantalla de Guardados, volvemos a ella
                    navigation.reset({
                        index: 1,
                        routes: [
                            { name: 'Home' },
                            { name: 'Saved' }
                        ],
                    });
                } else {
                    // Navegación normal hacia atrás
                    navigation.goBack();
                }
            }}
        >
            <Ionicons name="chevron-back" size={24} color="#ffffff" />
        </TouchableOpacity>
    );

    // Añadir botón de favoritos
    const renderFavoriteButton = () => (
        <TouchableOpacity
            style={styles.favoriteButton}
            onPress={toggleFavorite}
        >
            <Ionicons
                name={isCurrentFavorite ? "bookmark" : "bookmark-outline"}
                size={24}
                color={isCurrentFavorite ? "#A0E7E5" : "#ffffff"}
            />
        </TouchableOpacity>
    );

    // Verificar que item existe antes de renderizar
    if (!item) {
        return (
            <SafeAreaView style={[styles.container, styles.errorContainer]}>
                <Text style={styles.errorText}>No se pudo cargar la información</Text>
            </SafeAreaView>
        );
    }

    // Preparar las imágenes para el slider usando la utilidad
    let images = [];

    // Si venimos de guardados, usamos la utilidad para cargar las imágenes
    if (route.params?.fromSaved) {
        // Cargar la imagen principal usando la utilidad
        const mainImage = getImageById(item.id, type, item.nombre);
        images.push(mainImage);

        // Para algunos taxones, podríamos tener múltiples imágenes
        // Por ahora, solo añadimos la principal
    }
    // Si es una visualización normal, usamos las imágenes proporcionadas directamente
    else {
        // Si hay un array de imágenes, lo usamos
        if (item.imagenes && Array.isArray(item.imagenes) && item.imagenes.length > 0) {
            images = [...item.imagenes];
        }
        // Si no hay array pero hay una imagen individual, la usamos
        else if (item.imagen) {
            images = [item.imagen];
        }
    }

    // Si después de todo no tenemos imágenes, usamos un placeholder
    if (images.length === 0) {
        images = [require('../../assets/images/placeholder.png')];
        console.log('No hay imágenes disponibles para este taxón, usando placeholder');
    }

    return (
        <SafeAreaView style={styles.container}>
            <StatusBar barStyle="light-content" backgroundColor="#121212" />

            {/* Header con botón de retroceso y favoritos */}
            <View style={styles.headerContainer}>
                <View style={styles.headerContent}>
                    {renderBackButton()}
                    <Text style={styles.headerTitle}>{title || type.charAt(0).toUpperCase() + type.slice(1)}</Text>
                    {renderFavoriteButton()}
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
        backgroundColor: '#121212',
    },
    errorContainer: {
        justifyContent: 'center',
        alignItems: 'center',
    },
    errorText: {
        fontSize: 18,
        color: '#A0E7E5',
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
        justifyContent: 'center',
        alignItems: 'center',
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
        backgroundColor: '#A0E7E5',
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
        color: '#FFFFFF',
    },
    tipo: {
        fontSize: 18,
        fontStyle: 'italic',
        color: '#A0E7E5',
        marginBottom: 25,
    },
    seccion: {
        backgroundColor: '#1E1E1E',
        marginBottom: 30,
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
        backgroundColor: '#2A2D3E',
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
    taxonHijo: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingVertical: 16,
        paddingHorizontal: 12,
        borderBottomWidth: 1,
        borderBottomColor: '#2A2D3E',
    },
    taxonHijoNombre: {
        fontSize: 17,
        fontWeight: '500',
        color: '#FFFFFF',
        width: '100%',
    },
    caracteristicaCardSuficiente: {
        backgroundColor: 'rgba(160, 231, 229, 0.15)',
        borderLeftWidth: 3,
        borderLeftColor: '#A0E7E5',
    },
    caracteristicaNumeroSuficiente: {
        backgroundColor: '#A0E7E5',
    },
    caracteristicaTextoSuficiente: {
        color: '#A0E7E5',
        fontWeight: '500',
    },
    caracteristicaContenido: {
        flex: 1,
    },
    suficienteTag: {
        color: '#A0E7E5',
        fontSize: 12,
        fontWeight: 'bold',
        marginTop: 4,
    },
    backButton: {
        position: 'absolute',
        left: 16,
        width: 40,
        height: 40,
        borderRadius: 20,
        backgroundColor: 'rgba(255,255,255,0.1)',
        justifyContent: 'center',
        alignItems: 'center',
        zIndex: 10
    },
    favoriteButton: {
        position: 'absolute',
        right: 16,
        width: 40,
        height: 40,
        borderRadius: 20,
        backgroundColor: 'rgba(255,255,255,0.1)',
        justifyContent: 'center',
        alignItems: 'center',
        zIndex: 10
    },
});

export default DetailScreen;