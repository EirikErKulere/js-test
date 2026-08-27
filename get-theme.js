const savedTheme = localStorage.getItem("theme");
if (savedTheme) {
    document.documentElement.dataset.theme = savedTheme;
} else if (window.matchMedia("(prefers-color-scheme: light)").matches) {
    document.documentElement.dataset.theme = "light";
} else {
    document.documentElement.dataset.theme = "dark";
}
