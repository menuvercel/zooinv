import React, { useState } from 'react';
import {
    View,
    StyleSheet,
    FlatList,
    Text,
    SafeAreaView,
    StatusBar,
    ImageBackground,
    TouchableOpacity,
    Animated
} from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { filos } from '../data/taxonomia';

const FilosScreen = ({ navigation }) => {
    const [scrollY] = useState(new Animated.Value(0));
    
    // Animación para la línea separadora
    const headerLineOpacity = scrollY.interpolate({
        inputRange: [0, 20],
        outputRange: [1, 0.7],
        extrapolate: 'clamp'
    });
    
    const renderItem = ({ item }) => (
        <TouchableOpacity
            style={styles.card}
            onPress={() => navigation.navigate('Detail', {
                item: item,
                title: item.nombre,
                type: 'filo'
            })}
        >
            <ImageBackground
                source={item.imagen}
                style={styles.cardBackground}
                imageStyle={styles.cardImage}
            >
                <LinearGradient
                    colors={['transparent', 'rgb(0, 0, 0)']}
                    style={styles.cardGradient}
                >
                    <View style={styles.cardContent}>
                        <Text style={styles.cardTitle}>{item.nombre}</Text>
                    </View>
                </LinearGradient>
            </ImageBackground>
        </TouchableOpacity>
    );

    return (
        <SafeAreaView style={styles.container}>
            <StatusBar barStyle="dark-content" backgroundColor="#ffffff" />

            {/* Header simplificado con línea delgada */}
            <View style={styles.headerContainer}>
                <View style={styles.headerContent}>
                    <Text style={styles.headerTitle}>Filos</Text>
                </View>
                <Animated.View 
                    style={[
                        styles.headerLine, 
                        { opacity: headerLineOpacity }
                    ]} 
                />
            </View>

            <Animated.FlatList
                data={filos}
                renderItem={renderItem}
                keyExtractor={item => item.id}
                numColumns={1}
                contentContainerStyle={styles.list}
                onScroll={Animated.event(
                    [{ nativeEvent: { contentOffset: { y: scrollY } } }],
                    { useNativeDriver: false }
                )}
                scrollEventThrottle={16}
            />
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#ffffff',
    },
    headerContainer: {
        height: 60,
        width: '100%',
        backgroundColor: '#ffffff',
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: 8,
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
    list: {
        padding: 16,
    },
    card: {
        width: '100%',
        height: 220,
        borderRadius: 16,
        overflow: 'hidden',
        marginBottom: 20,
        elevation: 8,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 4 },
        shadowOpacity: 0.3,
        shadowRadius: 8,
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
        paddingLeft: 12,
    },
    cardContent: {
        padding: 0,
    },
    cardTitle: {
        color: 'white',
        fontSize: 35,
        fontWeight: 'bold',
        marginBottom: 6,
        textShadowColor: 'rgba(0, 0, 0, 0.75)',
        textShadowOffset: { width: 0, height: 1 },
        textShadowRadius: 3,
    },
});

export default FilosScreen;
