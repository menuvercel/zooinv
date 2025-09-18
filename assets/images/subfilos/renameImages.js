const fs = require('fs');
const path = require('path');

const directoryPath = __dirname; // Ruta de la carpeta donde se ejecuta el script

fs.readdir(directoryPath, (err, files) => {
  if (err) {
    console.error('Error al leer la carpeta:', err);
    return;
  }

  files.forEach(file => {
    const ext = path.extname(file).toLowerCase();
    const baseName = path.basename(file, ext);

    // Procesar archivos con extensión ".jpg" o ".jfif"
    if (ext === '.jpg' || ext === '.jfif') {
      // Quitar "ORDEN", "SUBCLASE", espacios y convertir a minúsculas
      let newBaseName = baseName.replace(/ORDEN/gi, '').replace(/SUBCLASE/gi, '').replace(/\s+/g, '').toLowerCase();

      // Si el archivo termina en ".jpg.jpg", ajustarlo a ".jpg"
      if (newBaseName.endsWith('.jpg')) {
        newBaseName = newBaseName.slice(0, -4); // Quitar el segundo ".jpg"
      }

      // Si la extensión era ".jfif", la eliminamos y verificamos
      let newFileName;
      if (ext === '.jfif') {
        newFileName = `${newBaseName || 'imagen'}.jpg`; // Aseguramos que tenga una extensión válida
      } else {
        newFileName = `${newBaseName}${ext}`; // Mantenemos la extensión original
      }

      // Renombrar el archivo
      fs.rename(path.join(directoryPath, file), path.join(directoryPath, newFileName), err => {
        if (err) {
          console.error(`Error al renombrar "${file}":`, err);
        } else {
          console.log(`"${file}" renombrado a "${newFileName}"`);
        }
      });
    }
  });
});
