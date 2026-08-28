document.querySelector(".theme-btn").addEventListener("click", () => {
    const currentTheme = document.documentElement.dataset.theme;
    document.documentElement.dataset.theme = currentTheme == "dark" ? "light" : "dark";
    localStorage.setItem("theme", document.documentElement.dataset.theme);
});

let players = [];
document.querySelector(".add-player-btn").addEventListener("click", () => {
    players.push(new Player("Player " + (players.length+1)));
});

const legendaryQuotes = [
    "Jeg bruker Osloskolen-GPT hver dag!",
    "Osloskolen-GPT elsker deg! ❤️",
    "why do they call it oven when you of in the cold food of out hot eat the food"
];
let currentQuoteIndex = 1;
document.querySelector(".quote-btn").addEventListener("click", () => {
    let quoteIndex = Math.floor(Math.random() * (legendaryQuotes.length - 1));
    if (quoteIndex >= currentQuoteIndex) quoteIndex++;
    currentQuoteIndex = quoteIndex;
    document.querySelector(".quote").textContent = legendaryQuotes[quoteIndex];
});
