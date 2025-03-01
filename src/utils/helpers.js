// Función para formatear texto
export const capitalizeFirstLetter = (string) => {
    return string.charAt(0).toUpperCase() + string.slice(1);
};

// Función para filtrar características principales (marcadas como "Suficiente" en el documento)
export const getMainCharacteristics = (caracteristicas) => {
    return caracteristicas.filter(c => c.includes('(Suficiente)'));
};

// Función para obtener una imagen de placeholder si la imagen del taxón no está disponible
export const getPlaceholderImage = (type) => {
    switch (type) {
        case 'filo':
            return require('../../assets/images/placeholder-filo.png');
        case 'clase':
            return require('../../assets/images/placeholder-clase.png');
        case 'subclase':
            return require('../../assets/images/placeholder-subclase.png');
        default:
            return require('../../assets/images/placeholder.png');
    }
};

// Función para extraer características suficientes del texto
export const extractSufficientCharacteristics = (text) => {
    const lines = text.split('\n');
    const characteristics = [];

    lines.forEach(line => {
        const trimmedLine = line.trim();
        if (trimmedLine.includes('(Suficiente)') || trimmedLine.includes('(S)')) {
            characteristics.push(trimmedLine.replace('(Suficiente)', '').replace('(S)', '').trim());
        }
    });

    return characteristics;
};
