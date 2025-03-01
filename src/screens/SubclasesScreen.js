import React from 'react';
import { View, StyleSheet, FlatList, TouchableOpacity, Text, SafeAreaView } from 'react-native';
import Header from '../components/Header';
import TaxonCard from '../components/TaxonCard';
import { getSubclasesByClaseId } from '../data/taxonomia';

const SubclasesScreen = ({ route, navigation }) => {
    const { filoId, claseId, claseNombre } = route.params;
    const subclases = getSubclasesByClaseId(filoId, claseId);

    const renderItem = ({ item }) => (
        <TaxonCard
            item={item}
            onPress={() => navigation.navigate('Detail', {
                item: item,
                title: item.nombre,
                type: 'subclase'
            })}
        />
    );

    return (
        <SafeAreaView style={styles.container}>
            <Header />
            <View style={styles.backButtonContainer}>
                <TouchableOpacity
                    style={styles.backButton}
                    onPress={() => navigation.goBack()}
                >
                    <Text style={styles.backButtonText}>← Volver</Text>
                </TouchableOpacity>
            </View>
            <Text style={styles.title}>Subclases de {claseNombre}</Text>
            <FlatList
                data={subclases}
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
        backgroundColor: '#f5f5f5',
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

export default SubclasesScreen;
