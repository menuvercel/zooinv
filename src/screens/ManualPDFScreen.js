import React, { useState, useCallback } from 'react';
import {
    View,
    StyleSheet,
    TouchableOpacity,
    Text,
    SafeAreaView,
    StatusBar,
    Dimensions,
    ActivityIndicator,
    BackHandler,
    Image,
    Linking,
    Platform,
    ScrollView,
    Alert
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { BlurView } from 'expo-blur';
import { useFocusEffect } from '@react-navigation/native';
import * as FileSystem from 'expo-file-system';

const { width, height } = Dimensions.get('window');

const ManualPDFScreen = ({ navigation }) => {
    const [loading, setLoading] = useState(false);

    // Manejar el botón físico de atrás
    useFocusEffect(
        useCallback(() => {
            const onBackPress = () => {
                navigation.navigate('Home');
                return true;
            };

            // ✅ NUEVA API - Correcto
            const backHandler = BackHandler.addEventListener('hardwareBackPress', onBackPress);

            // ✅ NUEVA API - Correcto
            return () => backHandler.remove();
        }, [navigation])
    );


    // Función para abrir el PDF con un enfoque más simple
    const openPDF = async () => {
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
                    <Text style={styles.headerTitle}>Manual en PDF</Text>
                </View>
            </BlurView>

            {/* Contenido para visualizar el PDF */}
            <ScrollView
                style={styles.contentContainer}
                contentContainerStyle={styles.scrollContent}
            >
                <View style={styles.pdfPlaceholder}>
                    <Image
                        source={require('../../assets/images/pdf-icon.png')}
                        style={styles.pdfIcon}
                        resizeMode="contain"
                    />
                    <Text style={styles.pdfTitle}>Manual de Zoología de Invertebrados</Text>
                    <Text style={styles.pdfDescription}>
                        El manual completo está disponible como archivo PDF.
                        Puedes abrirlo con la aplicación predeterminada de tu dispositivo.
                    </Text>

                    <TouchableOpacity
                        style={styles.openButton}
                        onPress={openPDF}
                        disabled={loading}
                    >
                        {loading ? (
                            <ActivityIndicator size="small" color="#121212" />
                        ) : (
                            <>
                                <Ionicons name="document-text-outline" size={22} color="#ffffff" />
                                <Text style={styles.openButtonText}>Abrir Manual</Text>
                            </>
                        )}
                    </TouchableOpacity>
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
    contentContainer: {
        flex: 1,
        paddingTop: Platform.OS === 'ios' ? 80 : StatusBar.currentHeight + 60,
    },
    scrollContent: {
        flexGrow: 1,
        justifyContent: 'center',
        padding: 20,
    },
    pdfPlaceholder: {
        alignItems: 'center',
        backgroundColor: '#1E1E2D',
        borderRadius: 16,
        padding: 30,
        marginVertical: 20,
    },
    pdfIcon: {
        width: 120,
        height: 120,
        marginBottom: 24,
    },
    pdfTitle: {
        fontSize: 22,
        fontWeight: 'bold',
        color: '#ffffff',
        textAlign: 'center',
        marginBottom: 16,
    },
    pdfDescription: {
        fontSize: 16,
        color: 'rgba(255,255,255,0.7)',
        textAlign: 'center',
        marginBottom: 30,
        lineHeight: 24,
    },
    openButton: {
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: '#A0E7E5',
        paddingVertical: 12,
        paddingHorizontal: 24,
        borderRadius: 25,
    },
    openButtonText: {
        fontSize: 16,
        fontWeight: 'bold',
        color: '#121212',
        marginLeft: 8,
    },
});

export default ManualPDFScreen; 