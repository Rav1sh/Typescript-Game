import { Background } from "./background.js";
import { GameObject } from "./gameobject.js";
import { Monster } from "./monster.js";
import { MiniBuilding } from "./minibuilding.js";
import { NormalBuilding } from "./normalbuilding.js";
import { MegaBuilding } from "./megabuilding.js";
export class GameScreen extends GameObject {
    constructor(g) {
        super("gamescreen");
        this.score = 0;
        this.monsters = [];
        this.miniBuilding = [];
        this.normalBuilding = [];
        this.megaBuilding = [];
        this.background = new Background();
        this.monsterGame = g;
        const instructions = document.createElement("instructions");
        instructions.innerHTML = "Defend your buildings! Click on the Monsters to eliminate them.";
        this.div.appendChild(instructions);
        this.monsters.push(new Monster(this), new Monster(this), new Monster(this), new Monster(this), new Monster(this), new Monster(this));
        this.miniBuilding.push(new MiniBuilding(this));
        this.normalBuilding.push(new NormalBuilding(this));
        this.megaBuilding.push(new MegaBuilding(this));
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
            this.normalBuilding[0].remove();
            this.megaBuilding[0].remove();
            this.monsterGame.showGamOverScreen(this.score);
        }
    }
    update() {
        this.scoreCounter.innerText = `${this.score}`;
        this.background.update();
        for (let o of this.monsters) {
            o.update();
            if (this.checkCollision(this.miniBuilding[0].getBoundingRect(), o.getBoundingRect())) {
                this.removeObjects();
            }
            if (this.checkCollision(this.normalBuilding[0].getBoundingRect(), o.getBoundingRect())) {
                this.monsterGame.showGamOverScreen(this.score);
                this.removeObjects();
            }
            if (this.checkCollision(this.megaBuilding[0].getBoundingRect(), o.getBoundingRect())) {
                this.removeObjects();
            }
        }
    }
    removeObjects() {
        for (let i = 0; i < this.monsters.length; i++) {
            this.remove();
            this.monsters[i].remove();
            this.miniBuilding[0].remove();
            this.normalBuilding[0].remove();
            this.megaBuilding[0].remove();
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