import React from 'react';
import { TouchableOpacity, Text, StyleSheet } from 'react-native';

const BackButton = ({ onPress }) => {
    return (
        <TouchableOpacity
            style={styles.backButton}
            onPress={onPress}
        >
            <Text style={styles.backButtonText}>← Volver</Text>
        </TouchableOpacity>
    );
};

const styles = StyleSheet.create({
    backButton: {
        padding: 8,
    },
    backButtonText: {
        color: '#2980b9',
        fontSize: 16,
    },
});

export default BackButton;
