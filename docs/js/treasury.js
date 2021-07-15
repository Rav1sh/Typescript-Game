import { GameObject } from "./gameobject.js";
export class Treasury extends GameObject {
    constructor(screen) {
        super("treasury");
        this.health = 3;
        this.screen = screen;
        this.x = Math.random() * 600 + window.innerWidth;
    }
}
//# sourceMappingURL=treasury.js.map