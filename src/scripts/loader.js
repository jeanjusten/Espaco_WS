//Page Loader - Fade out when Fully Loaded
window.addEventListener("load", () => {
    const loader = document.querySelector(".loader")
    loader.classList.add("loader--hidden");

    document.body.removeChild(document.body.firstChild);
})

window.addEventListener('load', () => {
    const loader = document.querySelector('.loader');
    loader.classList.add('loader--hidden');
});