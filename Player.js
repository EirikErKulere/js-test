const container = document.querySelector(".player-container-container");

class Player {
    constructor(name) {
        this.name = name;
        this.score = 0;

        this.playerContainer = document.createElement("div");
        this.playerNameElement = document.createElement("h2");
        this.playerScoreElement = document.createElement("h2");
        this.buttonContainer = document.createElement("div");
        this.plusButton = document.createElement("button");
        this.minusButton = document.createElement("button");
        this.resetButton = document.createElement("button");

        this.playerContainer.classList.add("player-container");
        this.plusButton.classList.add("player-btn");
        this.minusButton.classList.add("player-btn");
        this.resetButton.classList.add("player-btn");

        container.appendChild(this.playerContainer);
        this.playerContainer.appendChild(this.playerNameElement);
        this.playerContainer.appendChild(this.playerScoreElement);
        this.playerContainer.appendChild(this.buttonContainer);
        this.buttonContainer.appendChild(this.plusButton);
        this.buttonContainer.appendChild(this.minusButton);
        this.buttonContainer.appendChild(this.resetButton);

        this.playerNameElement.textContent = this.name;
        this.playerScoreElement.textContent = this.score;
        this.plusButton.textContent = "+";
        this.minusButton.textContent = "-";
        this.resetButton.textContent = "Reset";

        this.plusButton.addEventListener("click", () => {
            this.score++;
            this.playerScoreElement.textContent = this.score;
        });
        this.minusButton.addEventListener("click", () => {
            this.score--;
            this.playerScoreElement.textContent = this.score;
        });
        this.resetButton.addEventListener("click", () => {
            this.score = 0;
            this.playerScoreElement.textContent = this.score;
        });
    }
}
