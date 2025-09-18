import React, { useState, useCallback } from 'react';
import {
    View,
    Text,
    StyleSheet,
    TextInput,
    FlatList,
    TouchableOpacity,
    SafeAreaView,
    StatusBar,
    Dimensions,
    Keyboard,
    Platform,
    BackHandler
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { BlurView } from 'expo-blur';
import { LinearGradient } from 'expo-linear-gradient';
import { filos, getClasesByFiloId, getSubclasesByClaseId, getOrdenesBySubclaseId, getSubfilosByFiloId, getClasesBySubfiloId } from '../data/taxonomia';
import { useFocusEffect } from '@react-navigation/native';

const { width } = Dimensions.get('window');

const SearchScreen = ({ navigation, route }) => {
    const [searchQuery, setSearchQuery] = useState('');
    const [searchResults, setSearchResults] = useState([]);

    // Controlar el botón de atrás para evitar navegación incorrecta
    useFocusEffect(
        useCallback(() => {
            const onBackPress = () => {
                // Si siempre navegamos explícitamente a Filos
                navigation.navigate('Filos');
                return true;
            };

            // Nueva API: addEventListener retorna un objeto con método remove()
            const backHandler = BackHandler.addEventListener('hardwareBackPress', onBackPress);

            // Nueva API: usar backHandler.remove() en lugar de removeEventListener
            return () => backHandler.remove();
        }, [navigation])
    );

    // Segundo useFocusEffect - Este está bien, no lo toques
    useFocusEffect(
        useCallback(() => {
            // Si no venimos de DetailScreen y no hay lastQuery, limpiamos los parámetros
            if (!route.params?.fromDetail && !route.params?.lastQuery) {
                // Limpiar cualquier parámetro antiguo
                navigation.setParams({});
            }
        }, [])
    );

    // Tercer useFocusEffect - Este está bien, no lo toques
    useFocusEffect(
        useCallback(() => {
            // Si hay parámetros con texto de búsqueda, lo restauramos
            if (route.params?.lastQuery) {
                setSearchQuery(route.params.lastQuery);
                searchTaxonomy(route.params.lastQuery);
            }
        }, [route.params?.lastQuery, route.params?.timestamp])
    );

    const searchTaxonomy = useCallback((query) => {
        if (!query.trim()) {
            setSearchResults([]);
            return;
        }

        const results = [];
        const queryLower = query.toLowerCase();

        // Buscar en filos
        filos.forEach(filo => {
            if (filo.nombre.toLowerCase().includes(queryLower)) {
                results.push({
                    id: filo.id,
                    nombre: filo.nombre,
                    tipo: 'Filo',
                    item: filo
                });
            }

            // Buscar en subfilos si existen
            if (filo.tieneSubfilos) {
                const subfilos = getSubfilosByFiloId(filo.id);
                subfilos.forEach(subfilo => {
                    if (subfilo.nombre.toLowerCase().includes(queryLower)) {
                        results.push({
                            id: subfilo.id,
                            nombre: subfilo.nombre,
                            tipo: 'Subfilo',
                            item: subfilo
                        });
                    }

                    // Buscar en clases de subfilos
                    const clasesSubfilo = getClasesBySubfiloId(filo.id, subfilo.id);
                    clasesSubfilo.forEach(clase => {
                        if (clase.nombre.toLowerCase().includes(queryLower)) {
                            results.push({
                                id: clase.id,
                                nombre: clase.nombre,
                                tipo: 'Clase',
                                item: clase
                            });
                        }
                    });
                });
            }

            // Buscar en clases
            const clases = getClasesByFiloId(filo.id);
            clases.forEach(clase => {
                if (clase.nombre.toLowerCase().includes(queryLower)) {
                    results.push({
                        id: clase.id,
                        nombre: clase.nombre,
                        tipo: 'Clase',
                        item: clase
                    });
                }

                // Buscar en subclases
                const subclases = getSubclasesByClaseId(filo.id, clase.id);
                subclases.forEach(subclase => {
                    if (subclase.nombre.toLowerCase().includes(queryLower)) {
                        results.push({
                            id: subclase.id,
                            nombre: subclase.nombre,
                            tipo: 'Subclase',
                            item: subclase
                        });
                    }

                    // Buscar en órdenes
                    const ordenes = getOrdenesBySubclaseId(filo.id, clase.id, subclase.id);
                    ordenes.forEach(orden => {
                        if (orden.nombre.toLowerCase().includes(queryLower)) {
                            results.push({
                                id: orden.id,
                                nombre: orden.nombre,
                                tipo: 'Orden',
                                item: orden
                            });
                        }
                    });
                });
            });
        });

        setSearchResults(results);
    }, []);

    const handleSearch = useCallback((text) => {
        setSearchQuery(text);
        searchTaxonomy(text);
    }, [searchTaxonomy]);

    const handleResultPress = (result) => {
        Keyboard.dismiss();
        // Al navegar al detalle, pasamos la consulta actual y marcamos que venimos de búsqueda
        navigation.navigate('Detail', {
            item: result.item,
            title: result.nombre,
            type: result.tipo.toLowerCase(),
            fromSearch: true,
            lastQuery: searchQuery // Guardamos la consulta actual
        });
    };

    const renderResultItem = ({ item }) => (
        <TouchableOpacity
            style={styles.resultItem}
            onPress={() => handleResultPress(item)}
        >
            <LinearGradient
                colors={['#2A2D3E', '#161822']}
                style={styles.resultGradient}
                start={{ x: 0, y: 0 }}
                end={{ x: 1, y: 1 }}
            >
                <View style={styles.resultContent}>
                    <View style={styles.resultLeft}>
                        <Text style={styles.resultName}>{item.nombre}</Text>
                        <View style={styles.resultTypeContainer}>
                            <Text style={styles.resultType}>{item.tipo}</Text>
                        </View>
                    </View>
                    <Ionicons name="chevron-forward" size={20} color="#A0E7E5" />
                </View>
            </LinearGradient>
        </TouchableOpacity>
    );

    return (
        <SafeAreaView style={styles.container}>
            <StatusBar barStyle="light-content" backgroundColor="#121212" />

            {/* Header con efecto de vidrio */}
            <BlurView intensity={80} tint="dark" style={styles.header}>
                <View style={styles.headerContent}>
                    <TouchableOpacity
                        style={styles.backButton}
                        onPress={() => navigation.navigate('Filos')}
                    >
                        <Ionicons name="chevron-back" size={24} color="#ffffff" />
                    </TouchableOpacity>
                    <Text style={styles.headerTitle}>Búsqueda</Text>
                </View>
            </BlurView>

            {/* Barra de búsqueda */}
            <View style={styles.searchContainer}>
                <View style={styles.searchBar}>
                    <Ionicons name="search" size={20} color="#A0E7E5" style={styles.searchIcon} />
                    <TextInput
                        style={styles.searchInput}
                        placeholder="Buscar taxón..."
                        placeholderTextColor="#666"
                        value={searchQuery}
                        onChangeText={handleSearch}
                        autoCapitalize="none"
                        autoCorrect={false}
                    />
                    {searchQuery.length > 0 && (
                        <TouchableOpacity
                            style={styles.clearButton}
                            onPress={() => handleSearch('')}
                        >
                            <Ionicons name="close-circle" size={20} color="#A0E7E5" />
                        </TouchableOpacity>
                    )}
                </View>
            </View>

            {/* Lista de resultados */}
            <FlatList
                data={searchResults}
                renderItem={renderResultItem}
                keyExtractor={item => item.id}
                contentContainerStyle={styles.resultsList}
                ListEmptyComponent={
                    searchQuery.length > 0 ? (
                        <View style={styles.emptyContainer}>
                            <Ionicons name="search-outline" size={48} color="#666" />
                            <Text style={styles.emptyText}>No se encontraron resultados</Text>
                        </View>
                    ) : null
                }
            />
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#121212',
    },
    header: {
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        zIndex: 1,
    },
    headerContent: {
        flexDirection: 'row',
        alignItems: 'center',
        paddingHorizontal: 16,
        paddingVertical: 12,
        paddingTop: Platform.OS === 'ios' ? 0 : StatusBar.currentHeight,
    },
    backButton: {
        width: 40,
        height: 40,
        borderRadius: 20,
        backgroundColor: 'rgba(255,255,255,0.1)',
        justifyContent: 'center',
        alignItems: 'center',
    },
    headerTitle: {
        fontSize: 20,
        fontWeight: 'bold',
        color: '#ffffff',
        marginLeft: 16,
    },
    searchContainer: {
        padding: 16,
        paddingTop: Platform.OS === 'ios' ? 80 : StatusBar.currentHeight + 60,
        backgroundColor: '#121212',
    },
    searchBar: {
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: '#2A2D3E',
        borderRadius: 12,
        paddingHorizontal: 12,
        height: 48,
        borderWidth: 1,
        borderColor: 'rgba(160, 231, 229, 0.2)',
    },
    searchIcon: {
        marginRight: 8,
    },
    searchInput: {
        flex: 1,
        fontSize: 16,
        color: '#ffffff',
        height: '100%',
    },
    clearButton: {
        padding: 4,
    },
    resultsList: {
        padding: 16,
    },
    resultItem: {
        marginBottom: 12,
        borderRadius: 16,
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
    resultGradient: {
        padding: 16,
    },
    resultContent: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
    },
    resultLeft: {
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center',
    },
    resultName: {
        fontSize: 16,
        fontWeight: '600',
        color: '#ffffff',
        flex: 1,
    },
    resultTypeContainer: {
        backgroundColor: 'rgba(160, 231, 229, 0.15)',
        paddingHorizontal: 8,
        paddingVertical: 4,
        borderRadius: 6,
        marginLeft: 8,
        borderWidth: 1,
        borderColor: 'rgba(160, 231, 229, 0.3)',
    },
    resultType: {
        fontSize: 12,
        fontWeight: '600',
        color: '#A0E7E5',
    },
    emptyContainer: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        paddingTop: 48,
    },
    emptyText: {
        marginTop: 16,
        fontSize: 16,
        color: '#666',
        textAlign: 'center',
    },
});

export default SearchScreen; 