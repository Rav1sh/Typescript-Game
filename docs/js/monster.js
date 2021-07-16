import { GameObject } from "./gameobject.js";
export class Monster extends GameObject {
    constructor(screen) {
        super("monster");
        this.health = Math.floor(Math.random() * 30) + 1;
        this.screen = screen;
        this.x = Math.random() * 600 + window.innerWidth;
        let rand = Math.floor(Math.random() * 3);
        switch (rand) {
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
        this.div.addEventListener("click", () => this.monsterSlap());
    }
    removeMe() {
        this.remove();
        this.screen.removeMonster(this);
        this.screen.score += 5;
    }
    monsterSlap() {
        this.health -= 1;
        if (this.health <= 0) {
            this.removeMe();
        }
    }
    update() {
        this.x += -3;
        if (this.x + this.div.clientWidth < 0) {
            this.x = window.innerWidth;
            let rand = Math.floor(Math.random() * 3);
            switch (rand) {
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
        this.div.style.transform = `translate(${this.x}px, ${this.y}px)`;
    }
}
//# sourceMappingURL=monster.js.map