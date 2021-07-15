import { GameObject } from "./gameobject.js"
import { MonsterGame } from "./game.js"

export class StartScreen extends GameObject {

    private monsterGame : MonsterGame
    
    constructor(monsterGame: MonsterGame) {
        super("startscreen")

        this.monsterGame = monsterGame
        
        const text = document.createElement("div")
        const btn = document.createElement("button")

        this.div.appendChild(text)
        this.div.appendChild(btn)

        text.innerText = "🧟"
        btn.innerText = "Start Now "
        
        btn.addEventListener("click", () => this.gotoGameScreen())
    }

    private gotoGameScreen(){
        this.remove()
        this.monsterGame.showGameScreen()
    }
}