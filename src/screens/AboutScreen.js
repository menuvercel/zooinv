import React, { useCallback, useState } from 'react';
import {
    View,
    Text,
    StyleSheet,
    TouchableOpacity,
    SafeAreaView,
    StatusBar,
    Image,
    ScrollView,
    Linking,
    Platform,
    BackHandler,
    ActivityIndicator,
    Alert
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { LinearGradient } from 'expo-linear-gradient';
import { BlurView } from 'expo-blur';
import { useFocusEffect } from '@react-navigation/native';
import * as FileSystem from 'expo-file-system';

const AboutScreen = ({ navigation }) => {
    // Fecha de última actualización
    const lastUpdate = "Mayo 2024";
    // Versión de la aplicación
    const appVersion = "1.0.0";
    // Estado para controlar la carga
    const [loading, setLoading] = useState(false);
    
    // Función para abrir el PDF con un enfoque más simple
    const openManual = async () => {
        try {
            setLoading(true);
            
            // URL del manual de zoología de invertebrados
            // Reemplaza esto con la URL real donde esté alojado tu PDF
            const pdfUrl = 'https://drive.google.com/file/d/18-jovB9Ffa5bC4zYJdG9ZpCLE0K0jHma/view';
            
            // Verificamos si podemos abrir la URL
            const canOpen = await Linking.canOpenURL(pdfUrl);
            
            if (canOpen) {
                await Linking.openURL(pdfUrl);
            } else {
                Alert.alert(
                    "No se puede abrir el PDF",
                    "No se ha encontrado una aplicación que pueda abrir este archivo PDF."
                );
            }
            
            setLoading(false);
        } catch (error) {
            console.error('Error al abrir el PDF:', error);
            setLoading(false);
            alert('No se pudo abrir el PDF. Por favor, inténtalo de nuevo más tarde.');
        }
    };
    
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

    return (
        <SafeAreaView style={styles.container}>
            <StatusBar barStyle="light-content" backgroundColor="#121212" />
            
            {/* Header con efecto de vidrio */}
            <BlurView intensity={80} tint="dark" style={styles.header}>
                <View style={styles.headerContent}>
                    <TouchableOpacity
                        style={styles.backButton}
                        onPress={() => navigation.navigate('Home')}
                    >
                        <Ionicons name="chevron-back" size={24} color="#ffffff" />
                    </TouchableOpacity>
                    <Text style={styles.headerTitle}>Acerca de la App</Text>
                </View>
            </BlurView>
            
            <ScrollView 
                style={styles.scrollView}
                contentContainerStyle={styles.contentContainer}
                showsVerticalScrollIndicator={false}
            >
                {/* Logo de la App */}
                <View style={styles.logoContainer}>
                    <Image
                        source={require('../../assets/images/logo-icon.png')}
                        style={styles.logo}
                        resizeMode="contain"
                    />
                    <Text style={styles.appName}>Manual de Zoología de Invertebrados</Text>
                    <View style={styles.versionContainer}>
                        <Text style={styles.versionText}>Versión {appVersion}</Text>
                        <View style={styles.dot} />
                        <Text style={styles.versionText}>Actualizada: {lastUpdate}</Text>
                    </View>
                </View>
                
                {/* Tarjetas de información */}
                <View style={styles.infoCards}>
                    {/* Tarjeta de Idea y Organización */}
                    <LinearGradient
                        colors={['#1E1E2D', '#161822']}
                        style={styles.card}
                        start={{ x: 0, y: 0 }}
                        end={{ x: 1, y: 1 }}
                    >
                        <View style={styles.cardHeader}>
                            <View style={styles.cardIconContainer}>
                                <Ionicons name="bulb-outline" size={22} color="#A0E7E5" />
                            </View>
                            <Text style={styles.cardTitle}>Idea y Organización</Text>
                        </View>
                        <Text style={styles.cardContent}>Rolando Yunior Fernandez Rivero</Text>
                    </LinearGradient>
                    
                    {/* Tarjeta de Diseño y Programación */}
                    <LinearGradient
                        colors={['#1E1E2D', '#161822']}
                        style={styles.card}
                        start={{ x: 0, y: 0 }}
                        end={{ x: 1, y: 1 }}
                    >
                        <View style={styles.cardHeader}>
                            <View style={styles.cardIconContainer}>
                                <Ionicons name="code-slash-outline" size={22} color="#A0E7E5" />
                            </View>
                            <Text style={styles.cardTitle}>Diseño y Programación</Text>
                        </View>
                        <Text style={styles.cardContent}>Gilberto Hernandez Acosta</Text>
                    </LinearGradient>
                    
                    {/* Tarjeta de Contenido e Información */}
                    <LinearGradient
                        colors={['#1E1E2D', '#161822']}
                        style={styles.card}
                        start={{ x: 0, y: 0 }}
                        end={{ x: 1, y: 1 }}
                    >
                        <View style={styles.cardHeader}>
                            <View style={styles.cardIconContainer}>
                                <Ionicons name="book-outline" size={22} color="#A0E7E5" />
                            </View>
                            <Text style={styles.cardTitle}>Contenido e Información</Text>
                        </View>
                        <TouchableOpacity onPress={openManual} disabled={loading}>
                            <Text style={styles.cardContent}>
                                Manual de Zoología de Invertebrados
                                {loading ? (
                                    <View style={styles.loadingContainer}>
                                        <ActivityIndicator size="small" color="#A0E7E5" />
                                    </View>
                                ) : (
                                    <Text style={styles.linkText}> (Abrir PDF)</Text>
                                )}
                            </Text>
                        </TouchableOpacity>
                    </LinearGradient>
                </View>
                
                {/* Footer con información Universidad */}
                <View style={styles.footer}>
                    <Image
                        source={require('../../assets/images/logo-fbio.png')}
                        style={styles.footerLogo}
                        resizeMode="contain"
                    />
                </View>
            </ScrollView>
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#121212',
    },
    header: {
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        zIndex: 1,
    },
    headerContent: {
        flexDirection: 'row',
        alignItems: 'center',
        paddingHorizontal: 16,
        paddingVertical: 12,
        paddingTop: Platform.OS === 'ios' ? 0 : StatusBar.currentHeight,
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
        marginLeft: 16,
    },
    scrollView: {
        flex: 1,
    },
    contentContainer: {
        paddingTop: Platform.OS === 'ios' ? 80 : StatusBar.currentHeight + 60,
        paddingBottom: 30,
    },
    logoContainer: {
        alignItems: 'center',
        marginVertical: 30,
        paddingHorizontal: 20,
    },
    logo: {
        width: 100,
        height: 100,
        marginBottom: 16,
    },
    appName: {
        fontSize: 22,
        fontWeight: 'bold',
        color: '#ffffff',
        textAlign: 'center',
        marginBottom: 8,
    },
    versionContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
    },
    versionText: {
        fontSize: 14,
        color: 'rgba(255,255,255,0.6)',
    },
    dot: {
        width: 4,
        height: 4,
        borderRadius: 2,
        backgroundColor: 'rgba(255,255,255,0.6)',
        marginHorizontal: 8,
    },
    infoCards: {
        paddingHorizontal: 16,
    },
    card: {
        borderRadius: 16,
        padding: 20,
        marginBottom: 16,
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 10,
        },
        shadowOpacity: 0.25,
        shadowRadius: 20,
        elevation: 5,
    },
    cardHeader: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 16,
    },
    cardIconContainer: {
        width: 40,
        height: 40,
        borderRadius: 20,
        backgroundColor: 'rgba(160, 231, 229, 0.15)',
        justifyContent: 'center',
        alignItems: 'center',
        marginRight: 12,
    },
    cardTitle: {
        fontSize: 18,
        fontWeight: 'bold',
        color: '#ffffff',
    },
    cardContent: {
        fontSize: 16,
        color: 'rgba(255,255,255,0.8)',
        marginLeft: 52, // Alineado con el título después del icono
    },
    linkText: {
        color: '#A0E7E5',
        textDecorationLine: 'underline',
    },
    footer: {
        alignItems: 'center',
        marginTop: 40,
        paddingHorizontal: 20,
    },
    footerLogo: {
        width: 200,
        height: 40,
        marginBottom: 16,
    },
    loadingContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        marginLeft: 8,
    },
});

export default AboutScreen; 