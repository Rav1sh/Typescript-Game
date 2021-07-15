import { GameObject } from "./gameobject.js";
export class Building1 extends GameObject {
    constructor(screen) {
        super("building1");
        this.health = 3;
        this.screen = screen;
        this.x = Math.random() * 600 + window.innerWidth;
    }
}
//# sourceMappingURL=building1.js.map