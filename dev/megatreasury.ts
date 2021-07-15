import { GameObject } from "./gameobject.js"
import { GameScreen } from "./gamescreen.js"

export class MegaTreasury extends GameObject {

    private screen : GameScreen
    private health : number = 3

    constructor(screen : GameScreen){
        super("megaTreasury")
        this.screen = screen
        this.x = Math.random() * 600 + window.innerWidth              
        }

        public getBoundingRect() : DOMRect {
            return this.div.getBoundingClientRect();
        }
    }
