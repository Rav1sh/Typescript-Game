import { Background } from "./background.js"
import { MonsterGame } from "./game.js"
import { GameObject } from "./gameobject.js"
import { Monster } from "./monster.js"
import { MiniBuilding } from "./minibuilding.js"
import { MiniTreasury } from "./minitreasury.js"
import { MegaTreasury } from "./megatreasury.js"

export class GameScreen extends GameObject {

public score : number = 0
private scoreCounter: HTMLElement
private monsterGame : MonsterGame
private background: Background
private monsters:Monster[] = []
private miniBuilding : MiniBuilding[] = []
private miniTreasury : MiniTreasury[] =[]
private megaTreasury : MegaTreasury[] =[]

constructor(g:MonsterGame) {
    super("gamescreen")
    this.background = new Background()
    this.monsterGame = g
    const instructions = document.createElement("instructions")
    instructions.innerHTML = "Defend your buildings! Click on the Monsters to eliminate them."
    this.div.appendChild(instructions)
    
    this.monsters.push( 
        new Monster(this), 
        new Monster(this), 
        new Monster(this), 
        new Monster(this), 
        new Monster(this), 
        new Monster(this))

    this.miniBuilding.push(new MiniBuilding(this))
    this.miniTreasury.push(new MiniTreasury(this))
    this.megaTreasury.push(new MegaTreasury(this))

    const gamescreen = document.getElementsByTagName("gamescreen")[0];
    const overlay = document.createElement('overlay');

    this.scoreCounter = document.createElement('h1');
    this.scoreCounter.classList.add('scoreCounter');
    this.scoreCounter.innerText = `${this.score}`;
    overlay.appendChild(this.scoreCounter);
    gamescreen.appendChild(overlay);
}
    
public removeMonster(monsters : Monster){
    this.monsters = this.monsters.filter(rob => rob != monsters)
    if (this.monsters.length == 0) {
        this.remove()
        this.miniBuilding[0].remove()
        this.miniTreasury[0].remove()
        this.megaTreasury[0].remove()
        this.monsterGame.showGamOverScreen(this.score) 
    }
}

public removeTreasury(miniBuilding : MiniBuilding){
    this.miniBuilding = this.miniBuilding.filter(building => building != miniBuilding)
    if (this.miniBuilding.length == 0) {
        this.remove()
        this.monsterGame.showGamOverScreen(this.score)
    }
}

public update(){
    this.scoreCounter.innerText = `${this.score}`;
    this.background.update()

    for (let o of this.monsters) {
        o.update()

        if(this.checkCollision(this.miniBuilding[0].getBoundingRect(), o.getBoundingRect())){
            this.removeObjects()
        }

        if(this.checkCollision(this.miniTreasury[0].getBoundingRect(), o.getBoundingRect())){
            this.monsterGame.showGamOverScreen(this.score)
            this.removeObjects()
        }

        if(this.checkCollision(this.megaTreasury[0].getBoundingRect(), o.getBoundingRect())){
            this.removeObjects()
        }
    }
}



    private removeObjects(){
        for (let i = 0; i < this.monsters.length; i++) {
            this.remove()
            this.monsters[i].remove()
            this.miniBuilding[0].remove()
            this.miniTreasury[0].remove()
            this.megaTreasury[0].remove()
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