import React from 'react';
import { View, StyleSheet, FlatList, TouchableOpacity, Text, SafeAreaView, StatusBar } from 'react-native';
import TaxonCard from '../components/TaxonCard';
import { getClasesByFiloId } from '../data/taxonomia';

const ClasesScreen = ({ route, navigation }) => {
    const { filoId, filoNombre } = route.params;
    const clases = getClasesByFiloId(filoId);

    const renderItem = ({ item }) => (
        <TaxonCard
            item={item}
            onPress={() => navigation.navigate('Detail', {
                item: item,
                title: item.nombre,
                type: 'clase'
            })}
        />
    );

    return (
        <SafeAreaView style={styles.container}>
            <StatusBar barStyle="dark-content" backgroundColor="#ffffff" />
            
            {/* Header simplificado con línea delgada */}
            <View style={styles.headerContainer}>
                <Text style={styles.headerTitle}>Clases</Text>
                <View style={styles.separator} />
            </View>
            
            <View style={styles.backButtonContainer}>
                <TouchableOpacity
                    style={styles.backButton}
                    onPress={() => navigation.goBack()}
                >
                    <Text style={styles.backButtonText}>← Volver</Text>
                </TouchableOpacity>
            </View>
            
            <Text style={styles.title}>Clases de {filoNombre}</Text>
            
            <FlatList
                data={clases}
                renderItem={renderItem}
                keyExtractor={item => item.id}
                numColumns={2}
                contentContainerStyle={styles.list}
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
        backgroundColor: '#ffffff', // Mismo color que el fondo
        justifyContent: 'center',
        alignItems: 'center',
        paddingBottom: 8,
    },
    headerTitle: {
        fontSize: 26,
        fontWeight: 'bold',
        color: '#333',
        marginBottom: 8,
    },
    separator: {
        height: 1,
        width: '70%', // No llega a los extremos
        backgroundColor: '#CCCCCC', // Color gris claro para la línea
        alignSelf: 'center',
    },
    backButtonContainer: {
        padding: 10,
    },
    backButton: {
        padding: 8,
    },
    backButtonText: {
        color: '#2980b9',
        fontSize: 16,
    },
    title: {
        fontSize: 22,
        fontWeight: 'bold',
        padding: 10,
        textAlign: 'center',
    },
    list: {
        padding: 8,
    },
});

export default ClasesScreen;
