import { GameObject } from "./gameobject.js";
export class Sailor extends GameObject {
    constructor(screen) {
        super("sailor");
        this.health = Math.floor(Math.random() * 4) + 1;
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
        this.div.addEventListener("click", () => this.getSlappedMate());
    }
    removeMe() {
        this.remove();
        this.screen.removeSailor(this);
        this.screen.score += 5;
    }
    getSlappedMate() {
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
//# sourceMappingURL=sailor.js.map