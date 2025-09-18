import React from 'react';
import { NavigationContainer, DarkTheme } from '@react-navigation/native';
import { Provider as PaperProvider } from 'react-native-paper';
import AppNavigator from './src/navigation/AppNavigator';
import { StatusBar } from 'react-native';
import { FavoritesProvider } from './src/context/FavoritesContext';

// Tema personalizado para NavigationContainer
const MyTheme = {
  dark: true,
  colors: {
    primary: '#A0E7E5',
    background: '#121212',
    card: '#1E1E1E',
    text: '#FFFFFF',
    border: '#2A2D3E',
    notification: '#FFA5AB',
  },
};

export default function App() {
  return (
    <FavoritesProvider>
      <PaperProvider>
        <StatusBar barStyle="light-content" backgroundColor="#121212" />
        <NavigationContainer theme={MyTheme}>
          <AppNavigator />
        </NavigationContainer>
      </PaperProvider>
    </FavoritesProvider>
  );
}
