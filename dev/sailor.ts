import { GameObject } from "./gameobject.js"
import { GameScreen } from "./gamescreen.js"

export class Sailor extends GameObject {

    private screen : GameScreen
    private health : number = 3

    constructor(screen : GameScreen){
        super("sailor")
        this.screen = screen
        this.x = Math.random() * 600 + window.innerWidth

        let rand : number = Math.floor(Math.random() * 3);
             
            switch(rand) {
                case 0:
                    this.y = 100;   
                    break;                 
                case 1:
                    this.y = 500;
                    break;
                case 2:
                    this.y = 800;
                    break;
            }
        this.div.addEventListener("click", ()=>this.getSlappedMate())
    }

    private removeMe(){
        this.remove()
        this.screen.removeSailor(this)
    }

    private getSlappedMate(){
        this.health -=1
        if(this.health <=0){
            this.removeMe();
        }
    }

    public update(): void{
        this.x += -3
        if(this.x + this.div.clientWidth < 0) {
            this.x = window.innerWidth
            let rand : number = Math.floor(Math.random() * 3);
             
            switch(rand) {
                case 0:
                    this.y = 100;   
                    break;                 
                case 1:
                    this.y = 600;
                    break;
                case 2:
                    this.y = 800;
                    break;
            }
        }
        this.div.style.transform = `translate(${this.x}px, ${this.y}px)`
    }
}