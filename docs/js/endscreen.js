import { GameObject } from "./gameobject.js";
export class GamOverScreen extends GameObject {
    constructor(monsterGame) {
        super("gamOverScreen");
        this.monsterGame = monsterGame;
        const gameOverDiv = document.createElement("div");
        gameOverDiv.innerText = "Game Over";
        this.div.appendChild(gameOverDiv);
        const gameOverButton = document.createElement("button");
        gameOverButton.innerText = "Go to start";
        this.div.appendChild(gameOverButton);
        gameOverButton.addEventListener("click", () => this.playScreen());
    }
    playScreen() {
        this.remove();
        this.monsterGame.startGame();
    }
}
//# sourceMappingURL=endscreen.js.map