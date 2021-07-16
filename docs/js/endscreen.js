import { GameObject } from "./gameobject.js";
export class GamOverScreen extends GameObject {
    constructor(monsterGame, score) {
        super("gamOverScreen");
        this.monsterGame = monsterGame;
        const gameOverDiv = document.createElement("div");
        gameOverDiv.innerText = "Game Over";
        this.div.appendChild(gameOverDiv);
        const gameOverButton = document.createElement("button");
        gameOverButton.innerText = "Go to start";
        this.div.appendChild(gameOverButton);
        const scoreCounter = document.createElement('h1');
        scoreCounter.innerText = `Score: ${score}`;
        scoreCounter.classList.add('test');
        this.div.appendChild(scoreCounter);
        gameOverButton.addEventListener("click", () => this.playScreen());
    }
    playScreen() {
        this.remove();
        this.monsterGame.startGame();
    }
}
//# sourceMappingURL=endscreen.js.map