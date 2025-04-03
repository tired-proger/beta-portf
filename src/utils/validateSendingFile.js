function validateSendingFile(file, availableExtensions) {

    const { extension, size } = file;

    //check extension
    if (!availableExtensions.includes(`.${extension}`)) return {
        error: {
            name: "Добавлен файл с недопустимым форматом",
            description: `Выберите файл с доступными расширениями: ${availableExtensions.join(", ")}`
        }
    };

    //check size (mb)
    if ((size / 1024 / 1024) >= 50) return { 
        error: {
            name: "Добавлен слишком большой файл по размеру (больше 50 мегабайт)",
            description: "Выберите файл менее 50 мегабайт по размеру"
        }
    };

    return { error: false }

}

export { validateSendingFile }