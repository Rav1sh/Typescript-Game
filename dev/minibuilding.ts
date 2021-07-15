import { GameObject } from "./gameobject.js"
import { GameScreen } from "./gamescreen.js"

export class MiniBuilding extends GameObject {

    private screen : GameScreen
    private health : number = 3

    constructor(screen : GameScreen){
        super("miniBuilding")
        this.screen = screen
        this.x = Math.random() * 600 + window.innerWidth              
        }
    }
