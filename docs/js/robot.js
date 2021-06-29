import { GameObject } from "./gameobject.js";
export class Robot extends GameObject {
    constructor(screen) {
        super("robot");
        this.speed = Math.random() * 3 + 2;
        this.health = 3;
        this.screen = screen;
        this.x = Math.random() * 600 + window.innerWidth;
        let rand = Math.floor(Math.random() * 3);
        switch (rand) {
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
        this.element.addEventListener("click", () => this.getSlappedMate());
    }
    removeMe() {
        this.remove();
        this.screen.removeRobot(this);
    }
    getSlappedMate() {
        this.health -= 1;
        if (this.health <= 0) {
            this.removeMe();
        }
    }
    update() {
        this.x += -3;
        if (this.x + this.element.clientWidth < 0) {
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
        this.element.style.transform = `translate(${this.x}px, ${this.y}px)`;
    }
}
//# sourceMappingURL=robot.js.map