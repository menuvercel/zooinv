import React from 'react';
import {
    View,
    StyleSheet,
    TouchableOpacity,
    Text,
    StatusBar,
    SafeAreaView,
    Image,
    ImageBackground
} from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import Header from '../components/Header';

const HomeScreen = ({ navigation }) => {
    return (
        <SafeAreaView style={styles.container}>
            <StatusBar barStyle="dark-content" backgroundColor="#ffffff" />

            {/* Banner personalizado */}
            <View style={styles.bannerContainer}>
                <ImageBackground
                    source={require('../../assets/images/banner.jpg')}
                    style={styles.bannerImage}
                >
                    <LinearGradient
                        colors={['rgba(0,0,0,0.6)', 'rgba(0,0,0,0.3)']}
                        style={styles.bannerGradient}
                    >
                        <View style={styles.titleContainer}>
                            <Text style={styles.manualText}>Manual</Text>
                            <Text style={styles.subTitleText}>Zoología de Invertebrados</Text>
                        </View>
                    </LinearGradient>
                </ImageBackground>
            </View>

            <View style={styles.content}>
                <View style={styles.cardsContainer}>
                    <TouchableOpacity
                        style={styles.card}
                        onPress={() => navigation.navigate('Filos')}
                    >
                        <ImageBackground
                            source={require('../../assets/images/boton.jpg')}
                            style={styles.cardBackground}
                            imageStyle={styles.cardImage}
                        >
                            <LinearGradient
                                colors={['transparent', 'rgba(0,0,0,0.8)']}
                                style={styles.cardGradient}
                            >
                                <View style={styles.cardContent}>
                                    <Text style={styles.cardTitle}>Identificar Filos</Text>
                                    <Text style={styles.cardDescription}>Explora y aprende sobre diferentes clasificaciones</Text>
                                </View>
                            </LinearGradient>
                        </ImageBackground>
                    </TouchableOpacity>

                    <TouchableOpacity
                        style={styles.card}
                        onPress={() => navigation.navigate('Incognita')}
                    >
                        <ImageBackground
                            source={require('../../assets/images/incog.jpg')}
                            style={styles.cardBackground}
                            imageStyle={styles.cardImage}
                        >
                            <LinearGradient
                                colors={['transparent', 'rgba(0,0,0,0.8)']}
                                style={styles.cardGradient}
                            >
                                <View style={styles.cardContent}>
                                    <Text style={styles.cardTitle}>Identificar Incógnita</Text>
                                    <Text style={styles.cardDescription}>Descubre elementos desconocidos</Text>
                                </View>
                            </LinearGradient>
                        </ImageBackground>
                    </TouchableOpacity>
                </View>
            </View>
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#ffffff',
    },
    bannerContainer: {
        height: 100,
        width: '100%',
    },
    bannerImage: {
        width: '100%',
        height: '100%',
    },
    bannerGradient: {
        width: '100%',
        height: '100%',
        justifyContent: 'center',
    },
    titleContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        paddingHorizontal: 16,
    },
    manualText: {
        fontSize: 60,
        fontWeight: 'bold',
        color: '#ffffff',
        marginRight: 20,
        marginLeft: 15
    },
    subTitleText: {
        fontSize: 23,
        fontWeight: '500',
        color: '#ffffff',
        flex: 1,
        flexWrap: 'wrap',
    },
    content: {
        flex: 1,
        padding: 16,
    },
    cardsContainer: {
        flex: 1,
        justifyContent: 'space-between',
        paddingVertical: 16,
    },
    card: {
        width: '100%',
        height: '48%', // Botones más grandes
        borderRadius: 16,
        overflow: 'hidden',
        elevation: 5,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.1,
        shadowRadius: 10,
        marginBottom: 16,
    },
    cardBackground: {
        width: '100%',
        height: '100%',
        justifyContent: 'flex-end',
    },
    cardImage: {
        borderRadius: 16,
    },
    cardGradient: {
        height: '100%',
        justifyContent: 'flex-end',
        padding: 16,
    },
    cardContent: {
        padding: 4,
    },
    cardTitle: {
        color: 'white',
        fontSize: 22,
        fontWeight: 'bold',
        marginBottom: 4,
    },
    cardDescription: {
        color: 'rgba(255, 255, 255, 0.9)',
        fontSize: 14,
    },
});

export default HomeScreen;
