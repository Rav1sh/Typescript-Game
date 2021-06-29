import { GameObject } from "./gameobject.js"
import { PirateGame } from "./game.js"

export class StartScreen extends GameObject {

    private pirateGame : PirateGame
    
    constructor(pirateGame: PirateGame) {
        super("startscreen")

        this.pirateGame = pirateGame
        
        const text = document.createElement("div")
        const btn = document.createElement("button")

        this.div.appendChild(text)
        this.div.appendChild(btn)

        text.innerText = "Pixel Piracy"
        btn.innerText = "Play Now "
        
        btn.addEventListener("click", () => this.gotoGameScreen())
    }

    private gotoGameScreen(){
        this.remove()
        this.pirateGame.showGameScreen()
    }
}