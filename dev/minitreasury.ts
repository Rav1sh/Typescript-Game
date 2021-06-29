import { GameObject } from "./gameobject.js"
import { GameScreen } from "./gamescreen.js"

export class MiniTreasury extends GameObject {

    private screen : GameScreen
    private health : number = 3

    constructor(screen : GameScreen){
        super("miniTreasury")
        this.screen = screen
        this.x = Math.random() * 600 + window.innerWidth              
        }

        public getBoundingRect() : DOMRect {
            return this.element.getBoundingClientRect();
        }
    }
