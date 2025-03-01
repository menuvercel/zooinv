import React from 'react';
import { StyleSheet, TouchableOpacity, Image, View, Text, Dimensions } from 'react-native';

const { width } = Dimensions.get('window');
const cardWidth = width / 2 - 20;

const TaxonCard = ({ item, onPress }) => {
    return (
        <TouchableOpacity style={styles.card} onPress={onPress}>
            <Image
                source={item.imagen ? item.imagen : require('../../assets/images/placeholder.png')}
                style={styles.image}
                resizeMode="cover"
            />
            <View style={styles.textContainer}>
                <Text style={styles.title}>{item.nombre}</Text>
            </View>
        </TouchableOpacity>
    );
};

const styles = StyleSheet.create({
    card: {
        width: cardWidth,
        backgroundColor: '#fff',
        borderRadius: 10,
        margin: 8,
        elevation: 3,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.1,
        shadowRadius: 2,
        overflow: 'hidden',
    },
    image: {
        width: '100%',
        height: 120,
    },
    textContainer: {
        padding: 10,
        alignItems: 'center',
    },
    title: {
        fontSize: 16,
        fontWeight: 'bold',
        textAlign: 'center',
    },
});

export default TaxonCard;
