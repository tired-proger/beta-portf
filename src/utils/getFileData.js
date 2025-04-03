function getFileData(filename) {

    filename = String(filename);

    let list = filename.split('.').reverse();
    let extension = list[0];
    let title = filename.replace(`.${extension}`, "");

    return { title, extension };

}

export { getFileData };