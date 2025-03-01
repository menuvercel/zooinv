import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from '../screens/HomeScreen';
import FilosScreen from '../screens/FilosScreen';
import ClasesScreen from '../screens/ClasesScreen';
import SubclasesScreen from '../screens/SubclasesScreen';
import DetailScreen from '../screens/DetailScreen';
import IncognitaScreen from '../screens/IncognitaScreen';

const Stack = createStackNavigator();

const AppNavigator = () => {
    return (
        <Stack.Navigator
            initialRouteName="Home"
            screenOptions={{
                headerShown: false,
            }}
        >
            <Stack.Screen name="Home" component={HomeScreen} />
            <Stack.Screen name="Filos" component={FilosScreen} />
            <Stack.Screen name="Clases" component={ClasesScreen} />
            <Stack.Screen name="Subclases" component={SubclasesScreen} />
            <Stack.Screen name="Detail" component={DetailScreen} />
            <Stack.Screen name="Incognita" component={IncognitaScreen} />
        </Stack.Navigator>
    );
};

export default AppNavigator;
