import React, { createContext, useState, useEffect, useContext } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';

// Clave para almacenamiento
const FAVORITES_STORAGE_KEY = '@zoologia_invertebrados:favorites';

// Creación del contexto
const FavoritesContext = createContext();

// Hook personalizado para usar el contexto
export const useFavorites = () => useContext(FavoritesContext);

// Proveedor del contexto
export const FavoritesProvider = ({ children }) => {
    const [favorites, setFavorites] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    // Cargar favoritos al iniciar
    useEffect(() => {
        const loadFavorites = async () => {
            try {
                const storedFavorites = await AsyncStorage.getItem(FAVORITES_STORAGE_KEY);
                if (storedFavorites) {
                    // Parsear los favoritos guardados
                    const parsedFavorites = JSON.parse(storedFavorites);
                    
                    // Establecer los favoritos en el estado
                    setFavorites(parsedFavorites);
                }
            } catch (error) {
                console.error('Error al cargar favoritos:', error);
            } finally {
                setIsLoading(false);
            }
        };

        loadFavorites();
    }, []);

    // Guardar favoritos cuando cambien
    useEffect(() => {
        const saveFavorites = async () => {
            try {
                // Guardar los favoritos en AsyncStorage
                await AsyncStorage.setItem(FAVORITES_STORAGE_KEY, JSON.stringify(favorites));
            } catch (error) {
                console.error('Error al guardar favoritos:', error);
            }
        };

        if (!isLoading) {
            saveFavorites();
        }
    }, [favorites, isLoading]);

    // Añadir un taxón a favoritos, asegurando que las imágenes se guarden correctamente
    const addFavorite = (taxon) => {
        // Verificamos si ya existe para no duplicar
        if (!favorites.some(fav => fav.id === taxon.id && fav.tipo === taxon.tipo)) {
            // Creamos una copia del taxón para asegurarnos de que se guarde correctamente
            const taxonToSave = { ...taxon };
            
            // Guardamos el taxón en favoritos
            setFavorites(prevFavorites => [...prevFavorites, taxonToSave]);
        }
    };

    // Eliminar un taxón de favoritos
    const removeFavorite = (id, tipo) => {
        setFavorites(favorites.filter(fav => !(fav.id === id && fav.tipo === tipo)));
    };

    // Verificar si un taxón está en favoritos
    const isFavorite = (id, tipo) => {
        return favorites.some(fav => fav.id === id && fav.tipo === tipo);
    };

    // Obtener un taxón favorito específico
    const getFavorite = (id, tipo) => {
        return favorites.find(fav => fav.id === id && fav.tipo === tipo);
    };

    return (
        <FavoritesContext.Provider
            value={{
                favorites,
                addFavorite,
                removeFavorite,
                isFavorite,
                getFavorite,
                isLoading
            }}
        >
            {children}
        </FavoritesContext.Provider>
    );
};

export default FavoritesContext; 