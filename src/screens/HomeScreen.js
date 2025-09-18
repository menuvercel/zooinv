import React, { useRef, useEffect, useState } from 'react';
import {
    View,
    StyleSheet,
    TouchableOpacity,
    Text,
    StatusBar,
    SafeAreaView,
    Image,
    ImageBackground,
    Animated,
    Dimensions,
    Platform,
    ScrollView,
    Easing,
    AppState
} from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { BlurView } from 'expo-blur';
import { Ionicons } from '@expo/vector-icons';
import * as Haptics from 'expo-haptics';
import { SharedElement } from 'react-navigation-shared-element';
import LottieView from 'lottie-react-native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import SavedItemsScreen from './SavedItemsScreen';
import ManualPDFScreen from './ManualPDFScreen';
import AboutScreen from './AboutScreen';
import { createStackNavigator } from '@react-navigation/stack';
import FilosScreen from '../screens/FilosScreen';
import ClasesScreen from '../screens/ClasesScreen';
import SubclasesScreen from '../screens/SubclasesScreen';
import DetailScreen from '../screens/DetailScreen';
import IncognitaScreen from '../screens/IncognitaScreen';
import SearchScreen from '../screens/SearchScreen';

const { width, height } = Dimensions.get('window');
const SPACING = 20;

// Componente personalizado para el Drawer
const CustomDrawerContent = ({ navigation }) => (
    <View style={drawerStyles.container}>
        <LinearGradient
            colors={['#1A1E2A', '#121212']}
            style={drawerStyles.background}
            start={{ x: 0, y: 0 }}
            end={{ x: 1, y: 1 }}
        />

        <View style={drawerStyles.header}>
            <Image
                source={require('../../assets/images/logo-icon.png')}
                style={drawerStyles.logo}
            />
            <Text style={drawerStyles.title}>Manual de Zoología</Text>
            <Text style={drawerStyles.subtitle}>Universidad de La Habana</Text>
        </View>

        <View style={drawerStyles.menuItems}>
            <TouchableOpacity
                style={drawerStyles.menuItem}
                onPress={() => navigation.navigate('ManualPDF')}
            >
                <Ionicons name="document-text-outline" size={24} color="#A0E7E5" />
                <Text style={drawerStyles.menuText}>Manual en PDF</Text>
            </TouchableOpacity>

            <TouchableOpacity
                style={drawerStyles.menuItem}
                onPress={() => navigation.navigate('Saved')}
            >
                <Ionicons name="bookmark-outline" size={24} color="#A0E7E5" />
                <Text style={drawerStyles.menuText}>Guardados</Text>
            </TouchableOpacity>

            <TouchableOpacity
                style={drawerStyles.menuItem}
                onPress={() => navigation.navigate('About')}
            >
                <Ionicons name="information-circle-outline" size={24} color="#A0E7E5" />
                <Text style={drawerStyles.menuText}>Acerca de la app</Text>
            </TouchableOpacity>
        </View>

        <View style={drawerStyles.footer}>
            <Text style={drawerStyles.footerText}>Versión 1.0.0</Text>
        </View>
    </View>
);

// Estilos para el Drawer
const drawerStyles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 20,
    },
    background: {
        position: 'absolute',
        width: '100%',
        height: '100%',
    },
    header: {
        alignItems: 'center',
        marginTop: 40,
        marginBottom: 40,
    },
    logo: {
        width: 80,
        height: 80,
        marginBottom: 15,
    },
    title: {
        color: '#fff',
        fontSize: 20,
        fontWeight: 'bold',
    },
    subtitle: {
        color: 'rgba(255,255,255,0.7)',
        fontSize: 14,
    },
    menuItems: {
        marginTop: 20,
    },
    menuItem: {
        flexDirection: 'row',
        alignItems: 'center',
        paddingVertical: 15,
        borderBottomWidth: 1,
        borderBottomColor: 'rgba(255,255,255,0.1)',
    },
    menuText: {
        color: '#fff',
        fontSize: 16,
        marginLeft: 15,
    },
    footer: {
        marginTop: 'auto',
        alignItems: 'center',
        paddingBottom: 20,
    },
    footerText: {
        color: 'rgba(255,255,255,0.5)',
        fontSize: 12,
    },
});

const HomeScreen = ({ navigation }) => {
    // Animaciones
    const fadeAnim = useRef(new Animated.Value(1)).current;
    const slideAnim = useRef(new Animated.Value(0)).current;
    const scaleAnim = useRef(new Animated.Value(1)).current;

    // Animación para las tarjetas
    const card1Anim = useRef(new Animated.Value(0)).current;
    const card2Anim = useRef(new Animated.Value(0)).current;
    const opacityAnim = useRef(new Animated.Value(1)).current;

    // Animación para el cintillo móvil
    const scrollX = useRef(new Animated.Value(0)).current;
    const [itemWidth, setItemWidth] = useState(0);
    const [totalWidth, setTotalWidth] = useState(0);
    const animationRef = useRef(null);
    const isFirstRun = useRef(true);

    // Datos para el cintillo móvil
    const taxonomyData = [
        { category: 'Filos', count: 31 },
        { category: 'Subfilos', count: 4 },
        { category: 'Clases', count: 38 },
        { category: 'Subclases', count: 17 },
        { category: 'Órdenes', count: 32 },
        { category: 'Superórdenes', count: 3 },
        { category: 'Familias', count: 11 }
    ];

    // Función para medir el ancho total del contenido
    const measureTotalWidth = (event) => {
        const { width } = event.nativeEvent.layout;
        setTotalWidth(width);
    };

    // Función para medir el ancho de un solo elemento
    const measureItemWidth = (event) => {
        const { width } = event.nativeEvent.layout;
        setItemWidth(width);
    };

    // Función para iniciar la animación del cintillo
    const startTickerAnimation = () => {
        // Aseguramos que tenemos medidas válidas
        if (itemWidth <= 0 || totalWidth <= 0) return;
        
        // Calculamos la duración basada en el ancho para mantener velocidad constante
        const pixelsPerSecond = 40; // Velocidad ajustable
        const singleSetWidth = itemWidth * taxonomyData.length;
        const duration = (singleSetWidth / pixelsPerSecond) * 2000;
        
        // Detenemos cualquier animación previa
        if (animationRef.current) {
            animationRef.current.stop();
        }
        
        // Reiniciamos la animación al valor inicial
        scrollX.setValue(0);
        
        // Creamos una animación simple que se mueve continuamente
        const startAnimation = () => {
            Animated.timing(scrollX, {
                toValue: -singleSetWidth,
                duration: duration,
                easing: Easing.linear,
                useNativeDriver: true,
                isInteraction: false, // Importante para evitar problemas con otras interacciones
            }).start(({ finished }) => {
                // Si la animación terminó normalmente (no fue detenida)
                if (finished) {
                    // Reiniciamos instantáneamente a 0 sin que se note
                    scrollX.setValue(0);
                    // Y comenzamos de nuevo
                    startAnimation();
                }
            });
        };
        
        // Iniciamos la animación
        startAnimation();
    };

    // Efecto para iniciar la animación cuando tenemos las medidas
    useEffect(() => {
        if (itemWidth > 0 && totalWidth > 0 && isFirstRun.current) {
            isFirstRun.current = false;
            startTickerAnimation();
        }
        
        // Limpieza al desmontar
        return () => {
            if (animationRef.current) {
                animationRef.current.stop();
            }
            scrollX.removeAllListeners();
        };
    }, [itemWidth, totalWidth]);

    // Efecto para reiniciar la animación si la app vuelve de background
    useEffect(() => {
        const handleAppStateChange = (nextAppState) => {
            if (nextAppState === 'active' && !isFirstRun.current) {
                // Reiniciamos la animación cuando la app vuelve a primer plano
                startTickerAnimation();
            }
        };

        // Suscribimos al cambio de estado de la app
        const subscription = AppState.addEventListener('change', handleAppStateChange);

        // Limpieza
        return () => {
            subscription.remove();
        };
    }, [itemWidth, totalWidth]);

    // Función para proporcionar feedback háptico al presionar botones
    const handleCardPress = (route) => {
        Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Medium);
        navigation.navigate(route);
    };

    // Función para abrir el menú lateral
    const openDrawerMenu = () => {
        Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Light);
        navigation.openDrawer();
    };

    return (
        <SafeAreaView style={styles.container}>
            <StatusBar barStyle="light-content" backgroundColor="#121212" />

            {/* Fondo con gradiente */}
            <LinearGradient
                colors={['#1A1E2A', '#121212']}
                style={styles.background}
                start={{ x: 0, y: 0 }}
                end={{ x: 1, y: 1 }}
            />

            {/* Elementos decorativos de fondo */}
            <View style={styles.decorationContainer}>
                <Image
                    source={require('../../assets/images/decoration-dots.png')}
                    style={styles.decorationDots}
                    resizeMode="contain"
                />
                <View style={styles.glowEffect1} />
                <View style={styles.glowEffect2} />
            </View>

            {/* Header con efecto de vidrio */}
            <Animated.View
                style={[
                    styles.header,
                    {
                        opacity: fadeAnim,
                        transform: [
                            { translateY: slideAnim },
                            { scale: scaleAnim }
                        ]
                    }
                ]}
            >
                <BlurView intensity={30} tint="dark" style={styles.headerBlur}>
                    <View style={styles.headerContent}>
                        <View style={styles.logoContainer}>
                            <Image
                                source={require('../../assets/images/logo-icon.png')}
                                style={styles.logoIcon}
                            />
                            <View>
                                <Text style={styles.logoText}>Manual de Zoología de Invertebrados</Text>
                                <Text style={styles.logoSubText}>Descubre la biodiversidad</Text>
                            </View>
                        </View>

                        <TouchableOpacity style={styles.menuButton} onPress={openDrawerMenu}>
                            <Ionicons name="menu-outline" size={28} color="#A0E7E5" />
                        </TouchableOpacity>
                    </View>
                </BlurView>
            </Animated.View>

            {/* Banner principal con animación */}
            <Animated.View
                style={[
                    styles.bannerContainer,
                    {
                        opacity: fadeAnim,
                        transform: [{ translateY: slideAnim }]
                    }
                ]}
            >
                <SharedElement id="banner-background">
                    <ImageBackground
                        source={require('../../assets/images/banner.jpg')}
                        style={styles.bannerImage}
                        imageStyle={styles.bannerImageStyle}
                    >
                        <LinearGradient
                            colors={['rgba(26, 30, 42, 0.3)', 'rgba(26, 30, 42, 0.9)']}
                            style={styles.bannerGradient}
                            start={{ x: 0, y: 0 }}
                            end={{ x: 0, y: 1 }}
                        >
                            <View style={styles.bannerContent}>
                                <Text style={styles.bannerText}>
                                    Material de apoyo para la realización de los Laboratorios de Zoología de Invertebrados 
                                </Text>
                                
                                {/* Logo de la Facultad de Biología */}
                                <View style={styles.logoFbioContainer}>
                                    <Image 
                                        source={require('../../assets/images/logo-fbio.png')}
                                        style={styles.logoFbio}
                                        resizeMode="contain"
                                    />
                                </View>

                                {/* Cintillo móvil con estadísticas - versión realmente infinita */}
                                <View style={styles.tickerContainer}>
                                    <Animated.View
                                        style={[
                                            styles.tickerContent,
                                            {
                                                transform: [{ translateX: scrollX }],
                                            }
                                        ]}
                                        onLayout={measureTotalWidth}
                                    >
                                        {/* Primera copia de los datos */}
                                        {taxonomyData.map((item, index) => (
                                            <View 
                                                key={`first-${index}`} 
                                                style={styles.tickerItem}
                                                onLayout={index === 0 ? measureItemWidth : undefined}
                                            >
                                                <Text style={styles.tickerNumber}>{item.count}</Text>
                                                <Text style={styles.tickerLabel}>{item.category}</Text>
                                            </View>
                                        ))}
                                        
                                        {/* Segunda copia de los datos */}
                                        {taxonomyData.map((item, index) => (
                                            <View 
                                                key={`second-${index}`} 
                                                style={styles.tickerItem}
                                            >
                                                <Text style={styles.tickerNumber}>{item.count}</Text>
                                                <Text style={styles.tickerLabel}>{item.category}</Text>
                                            </View>
                                        ))}
                                        
                                        {/* Tercera copia de los datos para asegurar que siempre hay contenido visible */}
                                        {taxonomyData.map((item, index) => (
                                            <View 
                                                key={`third-${index}`} 
                                                style={styles.tickerItem}
                                            >
                                                <Text style={styles.tickerNumber}>{item.count}</Text>
                                                <Text style={styles.tickerLabel}>{item.category}</Text>
                                            </View>
                                        ))}
                                    </Animated.View>
                                </View>

                            </View>
                        </LinearGradient>
                    </ImageBackground>
                </SharedElement>
            </Animated.View>

            {/* Sección de tarjetas principales */}
            <View style={styles.cardsSection}>
                <Animated.View
                    style={[
                        styles.sectionHeader,
                        { opacity: opacityAnim }
                    ]}
                >
                    <Text style={styles.sectionTitle}>Explorar</Text>
                    {/* Se eliminó el botón "Ver todo" */}
                </Animated.View>

                <View style={styles.cardsContainer}>
                    {/* Tarjeta 1: Identificar Filos */}
                    <Animated.View
                        style={[
                            styles.cardWrapper,
                            {
                                transform: [{ translateY: card1Anim }],
                                opacity: opacityAnim
                            }
                        ]}
                    >
                        <TouchableOpacity
                            style={styles.card}
                            onPress={() => handleCardPress('Filos')}
                            activeOpacity={0.9}
                        >
                            <SharedElement id="card-filos-background">
                                <ImageBackground
                                    source={require('../../assets/images/boton.jpg')}
                                    style={styles.cardBackground}
                                    imageStyle={styles.cardImage}
                                >
                                    <LinearGradient
                                        colors={['rgba(0,0,0,0.2)', 'rgba(0,0,0,0.8)']}
                                        style={styles.cardGradient}
                                        start={{ x: 0, y: 0 }}
                                        end={{ x: 0, y: 1 }}
                                    >
                                        <View style={styles.cardIconContainer}>
                                            <View style={styles.cardIcon}>
                                                <Ionicons name="book-outline" size={24} color="#A0E7E5" />
                                            </View>
                                        </View>

                                        <View style={styles.cardContent}>
                                            <View style={styles.cardBadge}>
                                                <Text style={styles.cardBadgeText}>TAXONOMÍA</Text>
                                            </View>
                                            <Text style={styles.cardTitle}>Identificar Filos</Text>
                                            <Text style={styles.cardDescription}>
                                                Explora y aprende sobre diferentes clasificaciones taxonómicas
                                            </Text>

                                            <View style={styles.cardFooter}>
                                                <View style={styles.cardStats}>
                                                    <Ionicons name="layers-outline" size={14} color="#A0E7E5" />
                                                    <Text style={styles.cardStatsText}>31 Filos</Text>
                                                </View>

                                                {/* El botón de flecha ahora tiene la misma función que la tarjeta completa */}
                                                <TouchableOpacity
                                                    style={styles.cardButton}
                                                    onPress={() => handleCardPress('Filos')}
                                                >
                                                    <Ionicons name="arrow-forward-circle" size={24} color="#A0E7E5" />
                                                </TouchableOpacity>
                                            </View>
                                        </View>
                                    </LinearGradient>
                                </ImageBackground>
                            </SharedElement>
                        </TouchableOpacity>
                    </Animated.View>

                    {/* Tarjeta 2: Identificar Incógnita */}
                    <Animated.View
                        style={[
                            styles.cardWrapper,
                            {
                                transform: [{ translateY: card2Anim }],
                                opacity: opacityAnim
                            }
                        ]}
                    >
                        <TouchableOpacity
                            style={styles.card}
                            onPress={() => handleCardPress('Incognita')}
                            activeOpacity={0.9}
                        >
                            <SharedElement id="card-incognita-background">
                                <ImageBackground
                                    source={require('../../assets/images/incog.jpg')}
                                    style={styles.cardBackground}
                                    imageStyle={styles.cardImage}
                                >
                                    <LinearGradient
                                        colors={['rgba(0,0,0,0.2)', 'rgba(0,0,0,0.8)']}
                                        style={styles.cardGradient}
                                        start={{ x: 0, y: 0 }}
                                        end={{ x: 0, y: 1 }}
                                    >
                                        <View style={styles.cardIconContainer}>
                                            <View style={[styles.cardIcon, styles.cardIcon2]}>
                                                <Ionicons name="search-outline" size={24} color="#FFA5AB" />
                                            </View>
                                        </View>

                                        <View style={styles.cardContent}>
                                            <View style={[styles.cardBadge, styles.cardBadge2]}>
                                                <Text style={[styles.cardBadgeText, styles.cardBadgeText2]}>DESCUBRIMIENTO</Text>
                                            </View>
                                            <Text style={styles.cardTitle}>Identificar Incógnita</Text>
                                            <Text style={styles.cardDescription}>
                                                Descubre y clasifica especímenes desconocidos
                                            </Text>

                                            <View style={styles.cardFooter}>
                                                <View style={styles.cardStats}>
                                                    <Ionicons name="flask-outline" size={14} color="#FFA5AB" />
                                                    <Text style={styles.cardStatsText}>Análisis interactivo</Text>
                                                </View>

                                                {/* El botón de flecha ahora tiene la misma función que la tarjeta completa */}
                                                <TouchableOpacity
                                                    style={[styles.cardButton, styles.cardButton2]}
                                                    onPress={() => handleCardPress('Incognita')}
                                                >
                                                    <Ionicons name="arrow-forward-circle" size={24} color="#FFA5AB" />
                                                </TouchableOpacity>
                                            </View>
                                        </View>
                                    </LinearGradient>
                                </ImageBackground>
                            </SharedElement>
                        </TouchableOpacity>
                    </Animated.View>
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
    background: {
        position: 'absolute',
        width: '100%',
        height: '100%',
    },
    decorationContainer: {
        position: 'absolute',
        width: '100%',
        height: '100%',
        overflow: 'hidden',
    },
    decorationDots: {
        position: 'absolute',
        width: width * 0.8,
        height: width * 0.8,
        opacity: 0.1,
        top: height * 0.1,
        right: -width * 0.4,
    },
    glowEffect1: {
        position: 'absolute',
        width: width * 0.6,
        height: width * 0.6,
        borderRadius: width * 0.3,
        backgroundColor: '#A0E7E5',
        opacity: 0.08,
        top: -width * 0.3,
        left: -width * 0.3,
    },
    glowEffect2: {
        position: 'absolute',
        width: width * 0.5,
        height: width * 0.5,
        borderRadius: width * 0.25,
        backgroundColor: '#FFA5AB',
        opacity: 0.06,
        bottom: -width * 0.25,
        right: -width * 0.25,
    },
    header: {
        width: '100%',
        paddingTop: Platform.OS === 'android' ? StatusBar.currentHeight : 0,
    },
    headerBlur: {
        paddingHorizontal: SPACING,
        paddingVertical: 15,
        borderBottomLeftRadius: 20,
        borderBottomRightRadius: 20,
        overflow: 'hidden',
    },
    headerContent: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
    },
    logoContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        flex: 1,
    },
    logoIcon: {
        width: 36,
        height: 36,
        marginRight: 10,
    },
    logoText: {
        fontSize: 16,
        fontWeight: 'bold',
        color: '#ffffff',
    },
    logoSubText: {
        fontSize: 12,
        color: 'rgba(255,255,255,0.7)',
    },
    menuButton: {
        width: 40,
        height: 40,
        borderRadius: 20,
        backgroundColor: 'rgba(255,255,255,0.1)',
        justifyContent: 'center',
        alignItems: 'center',
    },
    bannerContainer: {
        height: height * 0.25,
        width: width,
        marginTop: 15,
        paddingVertical: 0,
        paddingHorizontal: 0,
    },
    bannerImage: {
        width: '100%',
        height: '100%',
        borderRadius: 0,
        overflow: 'hidden',
    },
    bannerImageStyle: {
        borderRadius: 0,
    },
    bannerGradient: {
        width: '100%',
        height: '100%',
        justifyContent: 'space-between',
        padding: SPACING,
    },
    bannerContent: {
        flex: 1,
        justifyContent: 'space-between',
    },
    bannerText: {
        fontSize: 15,
        fontWeight: '600',
        color: '#ffffff',
        lineHeight: 20,
        marginBottom: 10,
        paddingHorizontal: 5,
        textAlign: 'center',
        letterSpacing: 0.5,
        textShadowColor: 'rgba(0, 0, 0, 0.75)',
        textShadowOffset: { width: 1, height: 1 },
        textShadowRadius: 3,
    },
    logoFbioContainer: {
        alignItems: 'center',
        justifyContent: 'center',
        marginBottom: 30,
    },
    logoFbio: {
        width: 200,
        height: 40,
    },
    tickerContainer: {
        height: 50,
        overflow: 'hidden',
        backgroundColor: 'rgba(0,0,0,0.3)',
        borderRadius: 0, // Eliminado el border radius para que llegue a los bordes
        marginHorizontal: -SPACING, // Extiende el cintillo hasta los bordes
        width: width, // Asegura que ocupe todo el ancho de la pantalla
    },
    tickerContent: {
        flexDirection: 'row',
        height: '100%',
        alignItems: 'center',
    },
    tickerItem: {
        paddingHorizontal: 20,
        alignItems: 'center',
        justifyContent: 'center',
    },
    tickerNumber: {
        fontSize: 16,
        fontWeight: 'bold',
        color: '#A0E7E5',
    },
    tickerLabel: {
        fontSize: 12,
        color: 'rgba(255,255,255,0.8)',
    },
    cardsSection: {
        flex: 1,
        paddingHorizontal: SPACING,
        marginTop: 20,
    },
    sectionHeader: {
        marginBottom: 15,
    },
    sectionTitle: {
        fontSize: 22,
        fontWeight: 'bold',
        color: '#ffffff',
    },
    cardsContainer: {
        flex: 1,
    },
    cardWrapper: {
        marginBottom: 15,
        height: height * 0.23,
        borderRadius: 20,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 10 },
        shadowOpacity: 0.3,
        shadowRadius: 20,
        elevation: 8,
    },
    card: {
        width: '100%',
        height: '100%',
        borderRadius: 20,
        overflow: 'hidden',
    },
    cardBackground: {
        width: '100%',
        height: '100%',
        justifyContent: 'flex-end',
    },
    cardImage: {
        borderRadius: 20,
    },
    cardGradient: {
        height: '100%',
        flexDirection: 'row',
        alignItems: 'stretch',
    },
    cardIconContainer: {
        width: 80,
        justifyContent: 'center',
        alignItems: 'center',
    },
    cardIcon: {
        width: 50,
        height: 50,
        borderRadius: 25,
        backgroundColor: 'rgba(160, 231, 229, 0.2)',
        justifyContent: 'center',
        alignItems: 'center',
        borderWidth: 1,
        borderColor: 'rgba(160, 231, 229, 0.4)',
    },
    cardIcon2: {
        backgroundColor: 'rgba(255, 165, 171, 0.2)',
        borderColor: 'rgba(255, 165, 171, 0.4)',
    },
    cardContent: {
        flex: 1,
        justifyContent: 'center',
        paddingVertical: 15,
        paddingRight: 15,
    },
    cardBadge: {
        alignSelf: 'flex-start',
        backgroundColor: 'rgba(160, 231, 229, 0.2)',
        paddingHorizontal: 10,
        paddingVertical: 4,
        borderRadius: 12,
        marginBottom: 8,
    },
    cardBadge2: {
        backgroundColor: 'rgba(255, 165, 171, 0.2)',
    },
    cardBadgeText: {
        color: '#A0E7E5',
        fontSize: 10,
        fontWeight: '600',
        letterSpacing: 1,
    },
    cardBadgeText2: {
        color: '#FFA5AB',
    },
    cardTitle: {
        color: 'white',
        fontSize: 20,
        fontWeight: 'bold',
        marginBottom: 4,
    },
    cardDescription: {
        color: 'rgba(255, 255, 255, 0.7)',
        fontSize: 12,
        marginBottom: 10,
    },
    cardFooter: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
    },
    cardStats: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    cardStatsText: {
        color: 'rgba(255, 255, 255, 0.8)',
        fontSize: 12,
        marginLeft: 6,
    },
    cardButton: {
        width: 36,
        height: 36,
        borderRadius: 18,
        backgroundColor: 'rgba(160, 231, 229, 0.15)',
        justifyContent: 'center',
        alignItems: 'center',
    },
    cardButton2: {
        backgroundColor: 'rgba(255, 165, 171, 0.15)',
    },
});

// Configuración para animaciones compartidas entre pantallas
HomeScreen.sharedElements = (route, otherRoute, showing) => {
    return [
        { id: 'banner-background' },
        { id: 'card-filos-background' },
        { id: 'card-incognita-background' }
    ];
};

// Configuración del Drawer Navigator
const Drawer = createDrawerNavigator();

const AppNavigator = () => {
    return (
        <Drawer.Navigator
            initialRouteName="Home"
            drawerContent={props => <CustomDrawerContent {...props} />}
            screenOptions={{
                headerShown: false,
                drawerStyle: {
                    backgroundColor: 'transparent',
                    width: '80%',
                },
                drawerType: 'front',
            }}
        >
            <Drawer.Screen name="Home" component={HomeScreen} />
            <Drawer.Screen name="ManualPDF" component={ManualPDFScreen} />
            <Drawer.Screen name="Saved" component={SavedItemsScreen} />
            <Drawer.Screen name="About" component={AboutScreen} />
        </Drawer.Navigator>
    );
};

export default AppNavigator;
