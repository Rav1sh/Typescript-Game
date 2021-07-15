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

    public score : number = 0;
    private scoreCounter: HTMLElement;



    constructor(g:PirateGame) {
        super("gamescreen")
        this.background = new Background()
        this.pirateGame = g
        const instructions = document.createElement("instructions")
        instructions.innerHTML = "Defend your treasuries! Click on the sailors to eliminate them."
        this.div.appendChild(instructions)
        
        this.sailors.push( 
            new Sailor(this), 
            new Sailor(this))

        this.treasury.push(new Treasury(this))
        this.miniTreasury.push(new MiniTreasury(this))
        this.megaTreasury.push(new MegaTreasury(this))



         //create scoreCounter
         const gamescreen = document.getElementsByTagName("gamescreen")[0];

         const overlay = document.createElement('overlay');
 
         this.scoreCounter = document.createElement('h1');
         this.scoreCounter.classList.add('scoreCounter');
         this.scoreCounter.innerText = `${this.score}`;
         overlay.appendChild(this.scoreCounter);
         gamescreen.appendChild(overlay);
 

    }
    
    public removeSailor(sailors : Sailor){
        this.sailors = this.sailors.filter(rob => rob != sailors)
        if (this.sailors.length == 0) {
            
            this.remove()
            this.pirateGame.showGamOverScreen()
            
            this.treasury[0].remove()
            this.miniTreasury[0].remove()
            this.megaTreasury[0].remove()
            
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

    //update score
     this.scoreCounter.innerText = `${this.score}`;

        this.background.update()

        for (let o of this.sailors) {
            o.update()
            

            if(this.checkCollision(this.treasury[0].getBoundingRect(), o.getBoundingRect())){
                
                
                if(this.sailors.length == 1){
                    this.remove()
                    this.sailors[0].remove()
                    this.treasury[0].remove()
                    this.miniTreasury[0].remove()
                    this.megaTreasury[0].remove()
                } else if (this.sailors.length > 1) {
                    this.remove()
                    this.sailors[0].remove()
                    // this.sailors[1].remove()
                    this.treasury[0].remove()
                    this.miniTreasury[0].remove()
                    this.megaTreasury[0].remove()
                } 
            }

            if(this.checkCollision(this.miniTreasury[0].getBoundingRect(), o.getBoundingRect())){

                this.pirateGame.showGamOverScreen()
                
                if(this.sailors.length == 1){
                    this.remove()
                    this.sailors[0].remove()
                    this.treasury[0].remove()
                    this.miniTreasury[0].remove()
                    this.megaTreasury[0].remove()
                } else if (this.sailors.length > 1) {
                    this.remove()
                    this.sailors[1].remove()
                    // this.sailors[1].remove()
                    this.treasury[0].remove()
                    this.miniTreasury[0].remove()
                    this.megaTreasury[0].remove()
                }
            }

            if(this.checkCollision(this.megaTreasury[0].getBoundingRect(), o.getBoundingRect())){
                if(this.sailors.length == 1){
                    this.remove()
                    this.sailors[0].remove()
                    this.treasury[0].remove()
                    this.miniTreasury[0].remove()
                    this.megaTreasury[0].remove()
                } else if (this.sailors.length > 1) {
                    this.remove()
                    this.sailors[0].remove()
                    // this.sailors[1].remove()
                    this.treasury[0].remove()
                    this.miniTreasury[0].remove()
                    this.megaTreasury[0].remove()
                }
            }

            // for (let o of this.sailors) {
            //     o.update()
                
    
            //     if(this.checkCollision(this.treasury[0].getBoundingRect(), o.getBoundingRect())){
            //         o.remove()
                    
            //         console.log(this.treasury[0])
            //     }
            // }


        }

        



        for(const sailor of this.sailors){
            sailor.update();

            if(this.checkCollision(sailor.getBoundingRect(), this.treasury[0].getBoundingRect())){
                this.score += 5;
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