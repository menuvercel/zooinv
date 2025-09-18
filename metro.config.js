const { getDefaultConfig } = require('expo/metro-config');

const defaultConfig = getDefaultConfig(__dirname);

// Agregar soporte para archivos PDF
defaultConfig.resolver.assetExts.push('pdf');

module.exports = defaultConfig; 