function getMatchMediaQuery(size) {
    const mediaQuery = window.matchMedia(`(max-width: ${size}px)`);
    return mediaQuery.matches;
}

export { getMatchMediaQuery }