import { GameObject } from "./gameobject.js"
import { GameScreen } from "./gamescreen.js"

export class NormalBuilding extends GameObject {

    private screen : GameScreen

    constructor(screen : GameScreen){
        super("normalBuilding")
        this.screen = screen
        this.x = Math.random() * 600 + window.innerWidth              
        }

        public getBoundingRect() : DOMRect {
            return this.div.getBoundingClientRect();
        }
    }
