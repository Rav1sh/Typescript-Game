import { Background } from "./background.js";
import { GameObject } from "./gameobject.js";
import { Monster } from "./monster.js";
import { MiniBuilding } from "./minibuilding.js";
import { MiniTreasury } from "./minitreasury.js";
import { MegaTreasury } from "./megatreasury.js";
export class GameScreen extends GameObject {
    constructor(g) {
        super("gamescreen");
        this.score = 0;
        this.monsters = [];
        this.miniBuilding = [];
        this.miniTreasury = [];
        this.megaTreasury = [];
        this.background = new Background();
        this.monsterGame = g;
        const instructions = document.createElement("instructions");
        instructions.innerHTML = "Defend your buildings! Click on the Monsters to eliminate them.";
        this.div.appendChild(instructions);
        this.monsters.push(new Monster(this), new Monster(this), new Monster(this), new Monster(this));
        this.miniBuilding.push(new MiniBuilding(this));
        this.miniTreasury.push(new MiniTreasury(this));
        this.megaTreasury.push(new MegaTreasury(this));
        const gamescreen = document.getElementsByTagName("gamescreen")[0];
        const overlay = document.createElement('overlay');
        this.scoreCounter = document.createElement('h1');
        this.scoreCounter.classList.add('scoreCounter');
        this.scoreCounter.innerText = `${this.score}`;
        overlay.appendChild(this.scoreCounter);
        gamescreen.appendChild(overlay);
    }
    removeMonster(monsters) {
        this.monsters = this.monsters.filter(rob => rob != monsters);
        if (this.monsters.length == 0) {
            this.remove();
            this.miniBuilding[0].remove();
            this.miniTreasury[0].remove();
            this.megaTreasury[0].remove();
            this.monsterGame.showGamOverScreen();
        }
    }
    removeTreasury(miniBuilding) {
        this.miniBuilding = this.miniBuilding.filter(building => building != miniBuilding);
        if (this.miniBuilding.length == 0) {
            this.remove();
            this.monsterGame.showGamOverScreen();
        }
    }
    update() {
        this.scoreCounter.innerText = `${this.score}`;
        this.background.update();
        for (let o of this.monsters) {
            o.update();
            if (this.checkCollision(this.miniBuilding[0].getBoundingRect(), o.getBoundingRect())) {
                if (this.monsters.length == 1) {
                    this.remove();
                    this.monsters[0].remove();
                    this.miniBuilding[0].remove();
                    this.miniTreasury[0].remove();
                    this.megaTreasury[0].remove();
                }
                else if (this.monsters.length == 2) {
                    this.remove();
                    this.monsters[0].remove();
                    this.miniBuilding[0].remove();
                    this.miniTreasury[0].remove();
                    this.megaTreasury[0].remove();
                }
                else if (this.monsters.length == 3) {
                    this.remove();
                    this.monsters[0].remove();
                    this.monsters[1].remove();
                    this.monsters[2].remove();
                    this.miniBuilding[0].remove();
                    this.miniTreasury[0].remove();
                    this.megaTreasury[0].remove();
                }
                else if (this.monsters.length == 4) {
                    this.remove();
                    this.monsters[0].remove();
                    this.monsters[1].remove();
                    this.monsters[2].remove();
                    this.monsters[3].remove();
                    this.miniBuilding[0].remove();
                    this.miniTreasury[0].remove();
                    this.megaTreasury[0].remove();
                }
            }
            if (this.checkCollision(this.miniTreasury[0].getBoundingRect(), o.getBoundingRect())) {
                this.monsterGame.showGamOverScreen();
                if (this.monsters.length == 1) {
                    this.remove();
                    this.monsters[0].remove();
                    this.miniBuilding[0].remove();
                    this.miniTreasury[0].remove();
                    this.megaTreasury[0].remove();
                }
                else if (this.monsters.length == 2) {
                    this.remove();
                    this.monsters[1].remove();
                    this.miniBuilding[0].remove();
                    this.miniTreasury[0].remove();
                    this.megaTreasury[0].remove();
                }
                else if (this.monsters.length == 3) {
                    this.remove();
                    this.monsters[0].remove();
                    this.monsters[1].remove();
                    this.monsters[2].remove();
                    this.miniBuilding[0].remove();
                    this.miniTreasury[0].remove();
                    this.megaTreasury[0].remove();
                }
                else if (this.monsters.length == 4) {
                    this.remove();
                    this.monsters[0].remove();
                    this.monsters[1].remove();
                    this.monsters[2].remove();
                    this.monsters[3].remove();
                    this.miniBuilding[0].remove();
                    this.miniTreasury[0].remove();
                    this.megaTreasury[0].remove();
                }
            }
            if (this.checkCollision(this.megaTreasury[0].getBoundingRect(), o.getBoundingRect())) {
                if (this.monsters.length == 1) {
                    this.remove();
                    this.monsters[0].remove();
                    this.miniBuilding[0].remove();
                    this.miniTreasury[0].remove();
                    this.megaTreasury[0].remove();
                }
                else if (this.monsters.length == 2) {
                    this.remove();
                    this.monsters[0].remove();
                    this.miniBuilding[0].remove();
                    this.miniTreasury[0].remove();
                    this.megaTreasury[0].remove();
                }
                else if (this.monsters.length == 3) {
                    this.remove();
                    this.monsters[0].remove();
                    this.monsters[1].remove();
                    this.monsters[2].remove();
                    this.miniBuilding[0].remove();
                    this.miniTreasury[0].remove();
                    this.megaTreasury[0].remove();
                }
                else if (this.monsters.length == 4) {
                    this.remove();
                    this.monsters[0].remove();
                    this.monsters[1].remove();
                    this.monsters[2].remove();
                    this.monsters[3].remove();
                    this.miniBuilding[0].remove();
                    this.miniTreasury[0].remove();
                    this.megaTreasury[0].remove();
                }
            }
        }
    }
    checkCollision(a, b) {
        return (a.left <= b.right &&
            b.left <= a.right &&
            a.top <= b.bottom &&
            b.top <= a.bottom);
    }
    remove() {
        this.background.remove();
        super.remove();
    }
}
//# sourceMappingURL=gamescreen.js.map