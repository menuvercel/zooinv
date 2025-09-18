import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from '../screens/HomeScreen';
import FilosScreen from '../screens/FilosScreen';
import ClasesScreen from '../screens/ClasesScreen';
import SubclasesScreen from '../screens/SubclasesScreen';
import DetailScreen from '../screens/DetailScreen';
import IncognitaScreen from '../screens/IncognitaScreen';
import SearchScreen from '../screens/SearchScreen';
import SavedItemsScreen from '../screens/SavedItemsScreen';
import ManualPDFScreen from '../screens/ManualPDFScreen';
import AboutScreen from '../screens/AboutScreen';

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
            <Stack.Screen name="Search" component={SearchScreen} />
            <Stack.Screen name="Saved" component={SavedItemsScreen} />
            <Stack.Screen name="ManualPDF" component={ManualPDFScreen} />
            <Stack.Screen name="About" component={AboutScreen} />
        </Stack.Navigator>
    );
};

export default AppNavigator;
