import { GameObject } from "./gameobject.js"
import { GameScreen } from "./gamescreen.js"

export class MegaBuilding extends GameObject {

    private screen : GameScreen

    constructor(screen : GameScreen){
        super("megaBuilding")
        this.screen = screen
        this.x = Math.random() * 600 + window.innerWidth              
        }

        public getBoundingRect() : DOMRect {
            return this.div.getBoundingClientRect();
        }
    }
