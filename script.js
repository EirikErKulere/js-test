document.querySelector(".theme-btn").addEventListener("click", () => {
    const currentTheme = document.documentElement.dataset.theme;
    document.documentElement.dataset.theme = currentTheme == "dark" ? "light" : "dark";
    localStorage.setItem("theme", document.documentElement.dataset.theme);
});

let players = [];

document.querySelector(".add-player-btn").addEventListener("click", () => {
    players.push(new Player("Player " + (players.length+1)));
});
