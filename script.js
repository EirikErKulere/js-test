document.querySelector(".theme-btn").addEventListener("click", () => {
    const currentTheme = document.documentElement.dataset.theme;
    document.documentElement.dataset.theme = currentTheme == "dark" ? "light" : "dark";
    localStorage.setItem("theme", document.documentElement.dataset.theme);
});

let poengA = 0;
let poengB = 0;

document.querySelector(".poeng-btn-plus-a").addEventListener("click", () => {
    poengA++;
    document.querySelector(".poeng-a").textContent = poengA;
});

document.querySelector(".poeng-btn-minus-a").addEventListener("click", () => {
    poengA--;
    document.querySelector(".poeng-a").textContent = poengA;
});

document.querySelector(".poeng-btn-reset-a").addEventListener("click", () => {
    poengA = 0;
    document.querySelector(".poeng-a").textContent = poengA;
});

document.querySelector(".poeng-btn-plus-b").addEventListener("click", () => {
    poengB++;
    document.querySelector(".poeng-b").textContent = poengB;
});

document.querySelector(".poeng-btn-minus-b").addEventListener("click", () => {
    poengB--;
    document.querySelector(".poeng-b").textContent = poengB;
});

document.querySelector(".poeng-btn-reset-b").addEventListener("click", () => {
    poengB = 0;
    document.querySelector(".poeng-b").textContent = poengB;
});
