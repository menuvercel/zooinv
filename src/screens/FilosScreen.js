import React, { useState, useRef, useCallback } from 'react';
import {
    View,
    StyleSheet,
    Text,
    SafeAreaView,
    StatusBar,
    ImageBackground,
    TouchableOpacity,
    Animated,
    Dimensions,
    Platform,
    BackHandler
} from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { BlurView } from 'expo-blur';
import { Ionicons } from '@expo/vector-icons';
import { SharedElement } from 'react-navigation-shared-element';
import { filos } from '../data/taxonomia';
import { useFocusEffect } from '@react-navigation/native';

const { width, height } = Dimensions.get('window');
const CARD_HEIGHT = height * 0.55;
const SPACING = 20;

const FilosScreen = ({ navigation }) => {
    const [activeIndex, setActiveIndex] = useState(0);
    const scrollX = useRef(new Animated.Value(0)).current;
    const flatListRef = useRef(null);

    // Manejar el botón físico de atrás
    useFocusEffect(
        useCallback(() => {
            const onBackPress = () => {
                navigation.navigate('Home');
                return true;
            };
            
            BackHandler.addEventListener('hardwareBackPress', onBackPress);
            return () => BackHandler.removeEventListener('hardwareBackPress', onBackPress);
        }, [navigation])
    );

    // Animación para el encabezado
    const headerTranslateY = scrollX.interpolate({
        inputRange: [0, 100],
        outputRange: [0, -20],
        extrapolate: 'clamp'
    });

    const headerOpacity = scrollX.interpolate({
        inputRange: [0, 60],
        outputRange: [1, 0.8],
        extrapolate: 'clamp'
    });

    // Función para navegar a la pantalla de detalle
    const navigateToDetail = (item) => {
        navigation.navigate('Detail', {
            item: item,
            title: item.nombre,
            type: 'filo'
        });
    };

    const renderItem = ({ item, index }) => {
        const inputRange = [
            (index - 1) * width,
            index * width,
            (index + 1) * width
        ];

        const scale = scrollX.interpolate({
            inputRange,
            outputRange: [0.9, 1, 0.9],
            extrapolate: 'clamp'
        });

        const opacity = scrollX.interpolate({
            inputRange,
            outputRange: [0.6, 1, 0.6],
            extrapolate: 'clamp'
        });

        const translateY = scrollX.interpolate({
            inputRange,
            outputRange: [30, 0, 30],
            extrapolate: 'clamp'
        });

        return (
            <View style={styles.cardContainer}>
                <Animated.View
                    style={[
                        styles.card,
                        { transform: [{ scale }, { translateY }], opacity }
                    ]}
                >
                    <SharedElement id={`item.${item.id}.image`}>
                        <ImageBackground
                            source={item.imagen}
                            style={styles.cardBackground}
                            imageStyle={styles.cardImage}
                        >
                            {/* Capa de efecto de profundidad */}
                            <LinearGradient
                                colors={['rgba(0,0,0,0.1)', 'rgba(0,0,0,0.7)']}
                                style={styles.cardGradient}
                            />

                            {/* Información principal - Alineada a la derecha */}
                            <View style={styles.cardContent}>
                                <View style={styles.cardBadge}>
                                    <Text style={styles.cardBadgeText}>FILO</Text>
                                </View>

                                <Text style={styles.cardTitle}>{item.nombre}</Text>

                                {item.especiesCount && (
                                    <View style={styles.cardStats}>
                                        <Ionicons name="leaf-outline" size={16} color="#A0E7E5" />
                                        <Text style={styles.cardStatsText}>
                                            {item.especiesCount} especies
                                        </Text>
                                    </View>
                                )}

                                {/* Botón de explorar - Única forma de entrar al detalle */}
                                <TouchableOpacity
                                    style={styles.exploreButton}
                                    onPress={() => navigateToDetail(item)}
                                >
                                    <Text style={styles.exploreButtonText}>Explorar</Text>
                                    <Ionicons name="arrow-forward" size={16} color="#ffffff" />
                                </TouchableOpacity>
                            </View>

                            {/* Decoración */}
                            <View style={styles.cardDecoration}>
                                <View style={styles.cardDecorationLine} />
                            </View>
                        </ImageBackground>
                    </SharedElement>
                </Animated.View>
            </View>
        );
    };

    // Indicadores de paginación mejorados
    const renderPagination = () => {
        return (
            <View style={styles.pagination}>
                {filos.map((_, index) => {
                    const inputRange = [
                        (index - 1) * width,
                        index * width,
                        (index + 1) * width
                    ];

                    // Animamos con scale en lugar de width/height
                    const scale = scrollX.interpolate({
                        inputRange,
                        outputRange: [1, 1.5, 1], // Aumenta 1.5 veces su tamaño cuando está activo
                        extrapolate: 'clamp'
                    });

                    const dotOpacity = scrollX.interpolate({
                        inputRange,
                        outputRange: [0.4, 1, 0.4],
                        extrapolate: 'clamp'
                    });

                    return (
                        <Animated.View
                            key={`dot-${index}`}
                            style={[
                                styles.dot,
                                {
                                    opacity: dotOpacity,
                                    transform: [{ scale }]
                                }
                            ]}
                        />
                    );
                })}
            </View>
        );
    };

    return (
        <SafeAreaView style={styles.container}>
            <StatusBar barStyle="light-content" backgroundColor="#121212" />

            {/* Header con efecto de vidrio */}
            <Animated.View
                style={[
                    styles.headerContainer,
                    {
                        transform: [{ translateY: headerTranslateY }],
                        opacity: headerOpacity
                    }
                ]}
            >
                <BlurView intensity={80} tint="dark" style={styles.headerBlur}>
                    <View style={styles.headerContent}>
                        <TouchableOpacity
                            style={styles.backButton}
                            onPress={() => navigation.navigate('Home')}
                        >
                            <Ionicons name="chevron-back" size={24} color="#ffffff" />
                        </TouchableOpacity>

                        <Text style={styles.headerTitle}>Taxonomía</Text>

                        <TouchableOpacity
                            style={styles.searchButton}
                            onPress={() => navigation.navigate('Search')}
                        >
                            <Ionicons name="search-outline" size={24} color="#ffffff" />
                        </TouchableOpacity>
                    </View>

                    <View style={styles.headerSubtitle}>
                        <Text style={styles.headerSubtitleText}>Filos</Text>
                        <Text style={styles.headerSubtitleCount}>{filos.length}</Text>
                    </View>
                </BlurView>
            </Animated.View>

            {/* Lista principal con optimización de rendimiento */}
            <Animated.FlatList
                ref={flatListRef}
                data={filos}
                renderItem={renderItem}
                keyExtractor={item => item.id}
                horizontal
                pagingEnabled
                showsHorizontalScrollIndicator={false}
                contentContainerStyle={styles.list}
                onScroll={Animated.event(
                    [{ nativeEvent: { contentOffset: { x: scrollX } } }],
                    { useNativeDriver: true }
                )}
                scrollEventThrottle={16}
                onMomentumScrollEnd={ev => {
                    const index = Math.round(ev.nativeEvent.contentOffset.x / width);
                    setActiveIndex(index);
                }}
                snapToInterval={width}
                decelerationRate="fast"
                removeClippedSubviews={true} // Mejora rendimiento
                maxToRenderPerBatch={3} // Limita cuántos elementos se renderizan a la vez
                windowSize={5} // Controla cuántos elementos se mantienen en memoria
                initialNumToRender={2} // Reduce la carga inicial
            />

            {/* Indicadores de paginación */}
            {renderPagination()}

            {/* Información adicional */}
            <View style={styles.infoContainer}>
                <View style={styles.infoCard}>
                    <LinearGradient
                        colors={['#2A2D3E', '#161822']}
                        style={styles.infoGradient}
                        start={{ x: 0, y: 0 }}
                        end={{ x: 1, y: 1 }}
                    >
                        <View style={styles.infoContent}>
                            <View style={styles.infoIconContainer}>
                                <Ionicons name="information-circle-outline" size={22} color="#A0E7E5" />
                            </View>
                            <Text style={styles.infoText}>
                                Explora los principales filos del reino animal y descubre su diversidad
                            </Text>
                        </View>
                    </LinearGradient>
                </View>
            </View>
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#121212',
    },
    headerContainer: {
        width: '100%',
        zIndex: 10,
    },
    headerBlur: {
        paddingTop: Platform.OS === 'ios' ? 0 : StatusBar.currentHeight,
        paddingHorizontal: 20,
        paddingBottom: 15,
    },
    headerContent: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        marginTop: 10,
    },
    backButton: {
        width: 40,
        height: 40,
        borderRadius: 20,
        backgroundColor: 'rgba(255,255,255,0.1)',
        justifyContent: 'center',
        alignItems: 'center',
    },
    headerTitle: {
        fontSize: 20,
        fontWeight: 'bold',
        color: '#ffffff',
    },
    searchButton: {
        width: 40,
        height: 40,
        borderRadius: 20,
        backgroundColor: 'rgba(255,255,255,0.1)',
        justifyContent: 'center',
        alignItems: 'center',
    },
    headerSubtitle: {
        flexDirection: 'row',
        alignItems: 'center',
        marginTop: 15,
    },
    headerSubtitleText: {
        fontSize: 32,
        fontWeight: '800',
        color: '#ffffff',
        letterSpacing: 0.5,
    },
    headerSubtitleCount: {
        fontSize: 16,
        fontWeight: '600',
        color: '#A0E7E5',
        marginLeft: 10,
        backgroundColor: 'rgba(160, 231, 229, 0.15)',
        paddingHorizontal: 12,
        paddingVertical: 4,
        borderRadius: 12,
        overflow: 'hidden',
    },
    list: {
        paddingTop: 20,
    },
    cardContainer: {
        width,
        alignItems: 'center',
        paddingHorizontal: SPACING,
    },
    card: {
        width: width - SPACING * 2,
        height: CARD_HEIGHT,
        borderRadius: 24,
        overflow: 'hidden',
        backgroundColor: '#1E1E1E',
        elevation: 10,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 10 },
        shadowOpacity: 0.5,
        shadowRadius: 15,
    },
    cardBackground: {
        width: '100%',
        height: '100%',
        justifyContent: 'flex-end',
    },
    cardImage: {
        borderRadius: 24,
    },
    cardGradient: {
        position: 'absolute',
        left: 0,
        right: 0,
        bottom: 0,
        height: '100%',
        borderRadius: 24,
    },
    cardContent: {
        padding: 24,
        position: 'relative',
        zIndex: 2,
        alignItems: 'flex-end', // Alinea todo el contenido a la derecha
    },
    cardBadge: {
        backgroundColor: 'rgba(255, 255, 255, 0.2)',
        paddingHorizontal: 12,
        paddingVertical: 6,
        borderRadius: 12,
        alignSelf: 'flex-end', // Alinea el badge a la derecha
        marginBottom: 12,
        borderWidth: 1,
        borderColor: 'rgba(255, 255, 255, 0.3)',
    },
    cardBadgeText: {
        color: '#ffffff',
        fontSize: 12,
        fontWeight: '700',
        letterSpacing: 1,
        textAlign: 'right', // Alinea el texto a la derecha
    },
    cardTitle: {
        color: 'white',
        fontSize: 38,
        fontWeight: '800',
        marginBottom: 12,
        textShadowColor: 'rgba(0, 0, 0, 0.75)',
        textShadowOffset: { width: 0, height: 2 },
        textShadowRadius: 5,
        textAlign: 'right', // Alinea el texto a la derecha
    },
    cardStats: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 20,
        justifyContent: 'flex-end', // Alinea los elementos a la derecha
    },
    cardStatsText: {
        color: '#ffffff',
        fontSize: 14,
        marginLeft: 6,
        fontWeight: '500',
        textAlign: 'right', // Alinea el texto a la derecha
    },
    exploreButton: {
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: 'rgba(160, 231, 229, 0.25)',
        paddingHorizontal: 16,
        paddingVertical: 10,
        borderRadius: 12,
        alignSelf: 'flex-end', // Alinea el botón a la derecha
        borderWidth: 1,
        borderColor: 'rgba(160, 231, 229, 0.5)',
    },
    exploreButtonText: {
        color: '#ffffff',
        fontSize: 14,
        fontWeight: '600',
        marginRight: 8,
    },
    cardDecoration: {
        position: 'absolute',
        top: 20,
        right: 20,
        alignItems: 'flex-end',
    },
    cardDecorationLine: {
        width: 40,
        height: 4,
        borderRadius: 2,
        backgroundColor: 'rgba(255, 255, 255, 0.3)',
        marginBottom: 8,
    },
    pagination: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 20,
    },
    dot: {
        width: 8,
        height: 8,
        borderRadius: 4,
        backgroundColor: '#A0E7E5',
        marginHorizontal: 4,
    },
    infoContainer: {
        paddingHorizontal: SPACING,
        marginTop: 20,
        marginBottom: 30,
    },
    infoCard: {
        borderRadius: 16,
        overflow: 'hidden',
    },
    infoGradient: {
        borderRadius: 16,
        padding: 16,
    },
    infoContent: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'flex-start',
    },
    infoIconContainer: {
        width: 40,
        height: 40,
        borderRadius: 20,
        backgroundColor: 'rgba(160, 231, 229, 0.15)',
        justifyContent: 'center',
        alignItems: 'center',
        marginRight: 14,
    },
    infoText: {
        color: '#ffffff',
        fontSize: 14,
        fontWeight: '500',
        flex: 1,
        lineHeight: 20,
    },
});

// Configuración para animaciones compartidas entre pantallas
FilosScreen.sharedElements = (route, otherRoute, showing) => {
    if (otherRoute && otherRoute.params) {
        const { item } = otherRoute.params;
        return [{ id: `item.${item.id}.image` }];
    }
    return [];
};

export default FilosScreen;
