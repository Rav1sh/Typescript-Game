import { GameObject } from "./gameobject.js";
export class GamOverScreen extends GameObject {
    constructor(pirateGame) {
        super("gamOverScreen");
        this.pirateGame = pirateGame;
        const gameOverDiv = document.createElement("div");
        gameOverDiv.innerText = "Game Over";
        this.div.appendChild(gameOverDiv);
        const gameOverButton = document.createElement("button");
        gameOverButton.innerText = "Back to start";
        this.div.appendChild(gameOverButton);
        gameOverButton.addEventListener("click", () => this.playScreen());
    }
    playScreen() {
        this.remove();
        this.pirateGame.startGame();
    }
}
//# sourceMappingURL=endscreen.js.map