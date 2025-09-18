import React, { useCallback, useEffect } from 'react';
import {
    View,
    Text,
    StyleSheet,
    TouchableOpacity,
    SafeAreaView,
    StatusBar,
    FlatList,
    Image,
    Dimensions,
    BackHandler,
    Alert
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { LinearGradient } from 'expo-linear-gradient';
import { useFavorites } from '../context/FavoritesContext';
import { useFocusEffect } from '@react-navigation/native';
import { getImageById } from '../utils/imageUtils';

const { width } = Dimensions.get('window');

const SavedItemsScreen = ({ navigation }) => {
    const { favorites, removeFavorite } = useFavorites();

    // Depuración: Verificamos las imágenes al entrar en la pantalla
    useFocusEffect(
        useCallback(() => {
            // Verificar si hay imágenes en los favoritos
            if (favorites && favorites.length > 0) {
                // Log para depuración
                console.log(`Tenemos ${favorites.length} favoritos guardados.`);
                
                // Verificar cada favorito
                favorites.forEach((fav, index) => {
                    const tieneImagen = fav.imagen !== undefined && fav.imagen !== null;
                    const tieneImagenes = fav.imagenes && Array.isArray(fav.imagenes) && fav.imagenes.length > 0;
                    
                    console.log(`Favorito ${index+1} (${fav.nombre}): ${tieneImagen ? 'tiene imagen principal' : 'NO tiene imagen principal'}, ${tieneImagenes ? `tiene ${fav.imagenes.length} imágenes` : 'NO tiene array de imágenes'}`);
                });
            } else {
                console.log('No hay favoritos guardados.');
            }
        }, [favorites])
    );

    // Manejar el botón físico de atrás
    useFocusEffect(
        useCallback(() => {
            const onBackPress = () => {
                // Navegar a la pantalla principal
                navigation.navigate('Home');
                return true;
            };
            
            BackHandler.addEventListener('hardwareBackPress', onBackPress);
            return () => BackHandler.removeEventListener('hardwareBackPress', onBackPress);
        }, [navigation])
    );

    // Abrir el detalle del elemento
    const openItemDetail = (item) => {
        // Asegurarnos de que el item tenga todas las propiedades necesarias
        const itemToPass = {
            ...item,
            // Asegurar que tenga el tipo correcto
            tipo: item.tipo || 'desconocido',
            // Cargar las imágenes usando la utilidad
            imagen: getImageById(item.id, item.tipo, item.nombre),
            // Para múltiples imágenes, usamos la misma por ahora
            imagenes: [getImageById(item.id, item.tipo, item.nombre)]
        };

        // Navegar a la pantalla de detalle con los datos correctos
        navigation.navigate('Detail', {
            item: itemToPass,
            type: itemToPass.tipo,
            title: itemToPass.nombre,
            fromSaved: true
        });
    };

    // Función para confirmar la eliminación de un elemento
    const confirmDelete = (item) => {
        Alert.alert(
            "Eliminar de guardados",
            `¿Estás seguro de que quieres eliminar "${item.nombre}" de tus guardados?`,
            [
                {
                    text: "Cancelar",
                    style: "cancel"
                },
                { 
                    text: "Eliminar", 
                    onPress: () => removeFavorite(item.id, item.tipo),
                    style: "destructive"
                }
            ]
        );
    };

    // Renderizar cada elemento favorito
    const renderItem = ({ item }) => {
        // Obtenemos la imagen del mapa en lugar de usar la referencia directa
        let image;
        try {
            image = getImageById(item.id, item.tipo, item.nombre);
            console.log(`Imagen cargada para ${item.nombre}`);
        } catch (error) {
            console.log(`Error al cargar imagen para ${item.nombre}: ${error.message}`);
            image = require('../../assets/images/placeholder.png');
        }
        
        return (
            <TouchableOpacity
                style={styles.itemContainer}
                onPress={() => openItemDetail(item)}
                activeOpacity={0.7}
            >
                <LinearGradient
                    colors={['#2A2D3E', '#161822']}
                    style={styles.itemGradient}
                    start={{ x: 0, y: 0 }}
                    end={{ x: 1, y: 1 }}
                >
                    <View style={styles.itemContent}>
                        <Image
                            source={image}
                            style={styles.itemImage}
                            resizeMode="cover"
                            defaultSource={require('../../assets/images/placeholder.png')}
                            onError={(e) => {
                                console.log(`Error de imagen para ${item.nombre}: ${e.nativeEvent.error}`);
                            }}
                        />
                        
                        <View style={styles.itemTextContainer}>
                            <Text style={styles.itemName}>{item.nombre || "Sin nombre"}</Text>
                            <Text style={styles.itemType}>
                                {item.tipo ? 
                                    item.tipo.charAt(0).toUpperCase() + item.tipo.slice(1) : 
                                    "Desconocido"
                                }
                            </Text>
                        </View>
                        
                        <TouchableOpacity
                            style={styles.removeButton}
                            onPress={() => confirmDelete(item)}
                            hitSlop={{ top: 10, right: 10, bottom: 10, left: 10 }}
                        >
                            <Ionicons name="close-circle" size={24} color="#FFA5AB" />
                        </TouchableOpacity>
                    </View>
                </LinearGradient>
            </TouchableOpacity>
        );
    };

    // Mensaje cuando no hay favoritos
    const EmptyListComponent = () => (
        <View style={styles.emptyContainer}>
            <Ionicons name="bookmark-outline" size={64} color="#666" />
            <Text style={styles.emptyText}>No tienes taxones guardados</Text>
            <Text style={styles.emptySubtext}>Usa el botón de marcador en la pantalla de detalles para guardar tus taxones favoritos</Text>
        </View>
    );

    return (
        <SafeAreaView style={styles.container}>
            <StatusBar barStyle="light-content" backgroundColor="#121212" />

            {/* Header */}
            <View style={styles.headerContainer}>
                <TouchableOpacity
                    style={styles.backButton}
                    onPress={() => navigation.navigate('Home')}
                >
                    <Ionicons name="chevron-back" size={24} color="#ffffff" />
                </TouchableOpacity>
                <Text style={styles.headerTitle}>Taxones guardados</Text>
            </View>

            {/* Lista de favoritos */}
            <FlatList
                data={favorites}
                renderItem={renderItem}
                keyExtractor={(item, index) => `${item.id || index}-${item.tipo || 'unknown'}-${index}`}
                contentContainerStyle={styles.listContainer}
                ListEmptyComponent={EmptyListComponent}
                showsVerticalScrollIndicator={false}
            />
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#121212',
    },
    headerContainer: {
        height: 70,
        width: '100%',
        backgroundColor: '#1E1E1E',
        flexDirection: 'row',
        alignItems: 'center',
        paddingHorizontal: 16,
        elevation: 4,
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
    },
    backButton: {
        width: 40,
        height: 40,
        borderRadius: 20,
        backgroundColor: 'rgba(255,255,255,0.1)',
        justifyContent: 'center',
        alignItems: 'center',
        marginRight: 16,
    },
    headerTitle: {
        fontSize: 20,
        fontWeight: 'bold',
        color: '#FFFFFF',
    },
    listContainer: {
        padding: 16,
        paddingBottom: 30,
    },
    itemContainer: {
        marginBottom: 16,
        borderRadius: 12,
        overflow: 'hidden',
        elevation: 3,
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
    },
    itemGradient: {
        padding: 16,
    },
    itemContent: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    itemImage: {
        width: 60,
        height: 60,
        borderRadius: 8,
        marginRight: 16,
        backgroundColor: '#2A2D3E',
    },
    placeholderImage: {
        width: 60,
        height: 60,
        borderRadius: 8,
        marginRight: 16,
        backgroundColor: '#2A2D3E',
        justifyContent: 'center',
        alignItems: 'center',
    },
    itemTextContainer: {
        flex: 1,
    },
    itemName: {
        fontSize: 18,
        fontWeight: 'bold',
        color: '#FFFFFF',
        marginBottom: 4,
    },
    itemType: {
        fontSize: 14,
        color: '#A0E7E5',
    },
    removeButton: {
        padding: 8,
    },
    emptyContainer: {
        alignItems: 'center',
        justifyContent: 'center',
        padding: 32,
        marginTop: 64,
    },
    emptyText: {
        fontSize: 18,
        fontWeight: 'bold',
        color: '#FFFFFF',
        marginTop: 16,
        textAlign: 'center',
    },
    emptySubtext: {
        fontSize: 14,
        color: '#999',
        textAlign: 'center',
        marginTop: 8,
        lineHeight: 20,
    },
});

export default SavedItemsScreen; 