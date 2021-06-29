import { GameObject } from "./gameobject.js"
import { PirateGame } from "./game.js"

export class GamOverScreen extends GameObject {

    private pirateGame : PirateGame

    constructor(pirateGame: PirateGame) {
        super("gamOverScreen")
        this.pirateGame = pirateGame

        const gameOverDiv = document.createElement("div")
        gameOverDiv.innerText = "Game Over"
        this.div.appendChild(gameOverDiv)

        const gameOverButton = document.createElement("button")
        gameOverButton.innerText = "Back to start"
        this.div.appendChild(gameOverButton)

        gameOverButton.addEventListener("click", () => this.playScreen())
    }

    private playScreen() {
        this.remove()
        this.pirateGame.startGame()
    }
}