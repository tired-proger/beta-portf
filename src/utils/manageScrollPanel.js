let panelSize = null;

const manageScrollPanel = (status) => {
    if (status === "show") {
        document.body.style.overflow = "";
        document.body.style.paddingRight = "0";
    } else {
        panelSize = panelSize === null ? (window.innerWidth - document.documentElement.clientWidth) : panelSize;
        document.body.style.paddingRight = panelSize + "px";
        document.body.style.overflow = "hidden";
    }
}

export { manageScrollPanel };