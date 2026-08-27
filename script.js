document.querySelector(".theme-btn").addEventListener("click", () => {
    const currentTheme = document.documentElement.dataset.theme;
    document.documentElement.dataset.theme = currentTheme == "dark" ? "light" : "dark";
    localStorage.setItem("theme", document.documentElement.dataset.theme);
})
