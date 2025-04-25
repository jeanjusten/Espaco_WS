// Page Loader - Fade out when Fully Loaded
window.addEventListener("load", () => {
    const loader = document.querySelector(".loader");
    loader.classList.add("loader--hidden");

    loader.addEventListener("transitionend", () => {
        loader.remove();
    });
});