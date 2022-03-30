const handleScroll = () => {
    const snackbar = document.getElementById("important-news");
    const menuBar = document.getElementById("menu-bar");

    if (snackbar && menuBar) {
        const position = menuBar.getBoundingClientRect();

        if (position.y === 0) {
            snackbar.style.marginTop = "2.5rem";
        } else {
            snackbar.style.marginTop = "";
        }
    }
};

export const Scroll = {
    handleScroll,
};
