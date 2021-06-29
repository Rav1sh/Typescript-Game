import { Background } from "./background.js"
import { PirateGame } from "./game.js"
import { GameObject } from "./gameobject.js"
import { Sailor } from "./sailor.js"
import { Treasury } from "./treasury.js"
import { MiniTreasury } from "./minitreasury.js"
import { MegaTreasury } from "./megatreasury.js"

export class GameScreen extends GameObject {

    private pirateGame : PirateGame
    private background: Background
    private sailors:Sailor[] = []
    private treasury : Treasury[] = []
    private miniTreasury : MiniTreasury[] =[]
    private megaTreasury : MegaTreasury[] =[]


    constructor(g:PirateGame) {
        super("gamescreen")
        this.background = new Background()
        this.pirateGame = g
        const instructions = document.createElement("instructions")
        instructions.innerHTML = "Defend your treasuries! Click on the sailors to eliminate them."
        this.div.appendChild(instructions)
        
        this.sailors.push(
            new Sailor(this), 
            new Sailor(this), 
            new Sailor(this), 
            new Sailor(this), 
            new Sailor(this), 
            new Sailor(this), 
            new Sailor(this), 
            new Sailor(this), 
            new Sailor(this))

        this.treasury.push(new Treasury(this))
        this.miniTreasury.push(new MiniTreasury(this))
        this.megaTreasury.push(new MegaTreasury(this))
    }
    
    public removeSailor(sailors : Sailor){
        this.sailors = this.sailors.filter(rob => rob != sailors)
        if (this.sailors.length == 0) {
            this.remove()
            this.pirateGame.showGamOverScreen()
        }
    }

    public removeTreasury(treasury : Treasury){
        this.treasury = this.treasury.filter(treasure => treasure != treasury)
        if (this.treasury.length == 0) {
            this.remove()
            this.pirateGame.showGamOverScreen()
        }
    }

    public update(){
        this.background.update()

        for (let o of this.sailors) {
            o.update()
            console.log(this.treasury[0])

            if(this.checkCollision(this.treasury[0].getBoundingRect(), o.getBoundingRect())){
                this.treasury.pop
                console.log(this.treasury[0])
            }
        }
    }
    
        private checkCollision(a: ClientRect, b: ClientRect) {
            return (a.left <= b.right &&
                b.left <= a.right &&
                a.top <= b.bottom &&
                b.top <= a.bottom)
        }
    
        public remove(){
            this.background.remove()
            super.remove()
        }
    } 