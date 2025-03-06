function generateNumObjFromArray(list) {
    let obj = {};
    list.forEach((item) => {
        obj[item.id] = false;
    })
    return obj;
}

export { generateNumObjFromArray };