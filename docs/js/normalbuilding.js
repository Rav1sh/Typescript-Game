import { GameObject } from "./gameobject.js";
export class NormalBuilding extends GameObject {
    constructor(screen) {
        super("normalBuilding");
        this.screen = screen;
        this.x = Math.random() * 600 + window.innerWidth;
    }
    getBoundingRect() {
        return this.div.getBoundingClientRect();
    }
}
//# sourceMappingURL=normalbuilding.js.map