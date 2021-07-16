import { GameObject } from "./gameobject.js"
import { GameScreen } from "./gamescreen.js"

export class Monster extends GameObject {

    private screen : GameScreen
    private health : number = Math.floor(Math.random() * 4) + 1;

    constructor(screen : GameScreen){
        super("monster")
        this.screen = screen
        this.x = Math.random() * 600 + window.innerWidth

        let rand : number = Math.floor(Math.random() * 3);
             
            switch(rand) {
                case 0:
                    this.y = 150;   
                    break;                 
                case 1:
                    this.y = 450;
                    break;
                case 2:
                    this.y = 800;
                    break;
            }
        this.div.addEventListener("click", ()=>this.clickMonster())
    }

    private removeMe(){
        this.remove()
        this.screen.removeMonster(this)
        this.screen.score += 2;
    }

    private clickMonster(){
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