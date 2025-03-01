import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const Header = () => {
    return (
        <View style={styles.header}>
            <Text style={styles.headerText}>Zoología de Invertebrados</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    header: {
        backgroundColor: '#3498db',
        padding: 15,
        alignItems: 'center',
        justifyContent: 'center',
        width: '100%',
    },
    headerText: {
        color: 'white',
        fontSize: 20,
        fontWeight: 'bold',
    },
});

export default Header;
