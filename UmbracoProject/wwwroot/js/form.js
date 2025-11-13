document.addEventListener("submit", function (e) {
    if (e.target.matches("form")) {
        sessionStorage.setItem("scrolly", window.scrollY);
    }
});

document.addEventListener("DOMContentLoaded", function () {
    const scrolly = sessionStorage.getItem("scrolly");
    if (scrolly) {
        window.scrollTo({ top: parseInt(scrolly, 10), behavior: "instant" });
        sessionStorage.removeItem("scrolly");
    }
});