import { GamOverScreen } from "./endscreen.js"
import { GameObject } from "./gameobject.js"
import { GameScreen } from "./gamescreen.js"
import { StartScreen } from "./startscreen.js"

export class PirateGame {

    private interface : GameObject

    constructor(){
        this.startGame()
        this.gameLoop()
    }

    public startGame(){
        this.interface = new StartScreen(this)
    }
    
    public showGamOverScreen(){
        this.interface = new GamOverScreen(this)
    }

    public showGameScreen(){
        this.interface = new GameScreen(this)
    }

    private gameLoop(){
        this.interface.update()
        requestAnimationFrame(()=>this.gameLoop())
    }
}

new PirateGame()