function getFileSize(fileSize) {
    
    const fileSizeInBytes = fileSize; // Размер файла в байтах
    const fileSizeInKB = fileSizeInBytes / 1024; // Размер файла в килобайтах
    const fileSizeInMB = fileSizeInKB / 1024; // Размер файла в мегабайтах
    
    if (fileSizeInMB > 1) {
        return `${fileSizeInMB.toFixed(2)} MB`; // Округляем до двух знаков после запятой
    } else {
        return `${fileSizeInKB.toFixed(2)} KB`; // Округляем до двух знаков после запятой
    }

}

export { getFileSize };