function generateUniqueId() {
    return 'id_' + Date.now() + '_' + Math.random().toString(36).slice(2, 9);
}

export { generateUniqueId };