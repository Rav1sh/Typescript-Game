import { GameObject } from "./gameobject.js"
import { MonsterGame } from "./game.js"

export class GamOverScreen extends GameObject {

    private monsterGame : MonsterGame

    constructor(monsterGame: MonsterGame, score : number) {
        super("gamOverScreen")
        this.monsterGame =  monsterGame

        const gameOverDiv = document.createElement("div")
        gameOverDiv.innerText = "Game Over"
        this.div.appendChild(gameOverDiv)

        const gameOverButton = document.createElement("button")
        gameOverButton.innerText = "Go to start"
        this.div.appendChild(gameOverButton)

        const scoreCounter = document.createElement('h1')
        scoreCounter.innerText = `Score: ${score}`
        scoreCounter.classList.add('test');
        this.div.appendChild(scoreCounter)

        gameOverButton.addEventListener("click", () => this.playScreen())
    }

    private playScreen() {
        this.remove()
        this.monsterGame.startGame()
    }
}