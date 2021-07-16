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
        const finalScore = document.createElement('h1');
        finalScore.innerText = `Score: ${score}`;
        finalScore.classList.add('endScore');
        this.div.appendChild(finalScore);
        gameOverButton.addEventListener("click", () => this.playScreen());
    }
    playScreen() {
        this.remove();
        this.monsterGame.startGame();
    }
}
//# sourceMappingURL=endscreen.js.map