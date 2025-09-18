/**
 * Utilidades para manejar imágenes en la aplicación
 */

// Mapa de imágenes para filos
const filoImages = {
    'Porifera': require('../../assets/images/filos/porifera.jpg'),
    'Cnidaria': require('../../assets/images/filos/cnidaria.jpg'),
    'Ctenophora': require('../../assets/images/filos/cnidaria.jpg'), // Usamos cnidaria como similar
    'Platyhelminthes': require('../../assets/images/filos/platyhelminthes.jpg'),
    'Nemertea': require('../../assets/images/filos/nemertea.jpg'),
    'Nematoda': require('../../assets/images/filos/nematoda.jpg'),
    'Arthropoda': require('../../assets/images/filos/arthropoda.jpg'),
    'Mollusca': require('../../assets/images/filos/mollusca.jpg'),
    'Annelida': require('../../assets/images/filos/annelida.jpg'),
    'Sipunculida': require('../../assets/images/filos/sipunculida.jpg'),
    'Echiura': require('../../assets/images/filos/echiura.jpg'),
    'Placozoa': require('../../assets/images/filos/placozoa.jpg'),
};

// Mapa de imágenes para clases
const claseImages = {
    'Calcarea': require('../../assets/images/clases/calcarea.jpg'),
    'Demospongiae': require('../../assets/images/clases/demospongiae.jpg'),
    'Hexactinellida': require('../../assets/images/clases/hexactinellida.jpg'),
    'Homoscleromorpha': require('../../assets/images/clases/homoscleromorpha.jpg'),
    'Hydrozoa': require('../../assets/images/clases/hydrozoa.jpg'),
    'Scyphozoa': require('../../assets/images/clases/scyphozoa.jpg'),
    'Anthozoa': require('../../assets/images/clases/anthozoa.jpg'),
    'Cubozoa': require('../../assets/images/clases/cubozoa.jpg'),
    'Staurozoa': require('../../assets/images/clases/staurozoa.jpg'),
    'Turbellaria': require('../../assets/images/clases/turbellaria.jpg'),
    'Trematoda': require('../../assets/images/clases/trematoda.jpg'),
    'Monogenea': require('../../assets/images/clases/monogenea.jpg'),
    'Cestoda': require('../../assets/images/clases/cestoda.jpg'),
    'Gastropoda': require('../../assets/images/clases/gastropoda.jpg'),
    'Bivalvia': require('../../assets/images/clases/bivalvia.jpg'),
    'Cephalopoda': require('../../assets/images/clases/cephalopoda.jpg'),
    'Polyplacophora': require('../../assets/images/clases/polyplacophora.jpg'),
    'Aplacophora': require('../../assets/images/clases/aplacophora.jpg'),
    'Scaphopoda': require('../../assets/images/clases/scaphopoda.jpg'),
    'Monoplacophora': require('../../assets/images/clases/monoplacophora.jpg'),
    'Insecta': require('../../assets/images/clases/insecta.jpg'),
    'Arachnida': require('../../assets/images/clases/arachnida.jpg'),
    'Malacostraca': require('../../assets/images/clases/malacostraca.jpg'),
    'Merostomata': require('../../assets/images/clases/merostomata.jpg'),
    'Branchiopoda': require('../../assets/images/clases/branchiopoda.jpg'),
    'Maxillopoda': require('../../assets/images/clases/maxillopoda.jpg'),
    'Polychaeta': require('../../assets/images/clases/polychaeta.jpg'),
    'Clitellata': require('../../assets/images/clases/clitellata.jpg'),
};

// Mapa de imágenes para subclases
const subclaseImages = {
    // Añadir según sea necesario
};

// Mapa de imágenes para órdenes
const ordenImages = {
    'Anthoathecata': require('../../assets/images/ordenes/anthoathecata.jpg'),
    'Actiniaria': require('../../assets/images/ordenes/actiniaria.jpg'),
    'Alcyonacea': require('../../assets/images/ordenes/alcyonacea.jpg'),
    'Antipatharia': require('../../assets/images/ordenes/antipatharia.jpg'),
    'Ceriantharia': require('../../assets/images/ordenes/ceriantharia.jpg'),
    'Corallimorpharia': require('../../assets/images/ordenes/corallimorpharia.jpg'),
    'Gorgonacea': require('../../assets/images/ordenes/gorgonacea.jpg'),
    'Leptothecata': require('../../assets/images/ordenes/leptothecata.jpg'),
    'Pennatulacea': require('../../assets/images/ordenes/pennatulacea.jpg'),
    'Scleractinia': require('../../assets/images/ordenes/scleractinia.jpg'),
    'Semaeostomeae': require('../../assets/images/ordenes/semaeostomeae.jpg'),
    'Stauromedusae': require('../../assets/images/ordenes/stauromedusae.jpg'),
    'Zoantharia': require('../../assets/images/ordenes/zoantharia.jpg'),
    'Carybdeida': require('../../assets/images/ordenes/carybdeida.jpg'),
    'Chirodropida': require('../../assets/images/ordenes/chirodropida.jpg'),
    'Scorpiones': require('../../assets/images/ordenes/scorpiones.jpg'),
    'Araneae': require('../../assets/images/ordenes/araneae.jpg'),
    'Opiliones': require('../../assets/images/ordenes/opiliones.jpg'),
    'Acari': require('../../assets/images/ordenes/acari.jpg'),
    'Xiphosura': require('../../assets/images/ordenes/xiphosura.jpg'),
};

// Función para obtener la imagen basada en un ID único y tipo
const getImageById = (id, tipo, nombre) => {
    // Intentar encontrar por nombre
    let image = null;
    const nombreLower = nombre ? nombre.toLowerCase() : '';
    
    // Primero intentamos una búsqueda exacta
    switch(tipo.toLowerCase()) {
        case 'filo':
            // Buscar en el mapa de filos
            Object.entries(filoImages).forEach(([key, value]) => {
                if (nombreLower.includes(key.toLowerCase())) {
                    image = value;
                }
            });
            break;
        case 'clase':
            // Buscar en el mapa de clases
            Object.entries(claseImages).forEach(([key, value]) => {
                if (nombreLower.includes(key.toLowerCase())) {
                    image = value;
                }
            });
            break;
        case 'subclase':
            // Buscar en el mapa de subclases
            Object.entries(subclaseImages).forEach(([key, value]) => {
                if (nombre.includes(key)) {
                    image = value;
                }
            });
            break;
        case 'orden':
            // Buscar en el mapa de órdenes
            Object.entries(ordenImages).forEach(([key, value]) => {
                if (nombreLower.includes(key.toLowerCase())) {
                    image = value;
                }
            });
            break;
        default:
            // Imagen por defecto
            image = require('../../assets/images/placeholder.png');
    }
    
    // Si no se encontró imagen, usar placeholder
    if (!image) {
        console.log(`No se encontró imagen para ${tipo} - ${nombre}, usando placeholder`);
        image = require('../../assets/images/placeholder.png');
    }
    
    return image;
};

// Exportar la función principal
export { getImageById }; 