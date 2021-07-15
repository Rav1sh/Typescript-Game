import { GameObject } from "./gameobject.js"
import { MonsterGame } from "./game.js"

export class GamOverScreen extends GameObject {

    private monsterGame : MonsterGame

    constructor(monsterGame: MonsterGame) {
        super("gamOverScreen")
        this.monsterGame =  monsterGame

        const gameOverDiv = document.createElement("div")
        gameOverDiv.innerText = "Game Over"
        this.div.appendChild(gameOverDiv)

        const gameOverButton = document.createElement("button")
        gameOverButton.innerText = "Go to start"
        this.div.appendChild(gameOverButton)

        gameOverButton.addEventListener("click", () => this.playScreen())
    }

    private playScreen() {
        this.remove()
        this.monsterGame.startGame()
    }
}