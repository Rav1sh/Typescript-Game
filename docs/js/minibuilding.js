import { GameObject } from "./gameobject.js";
export class MiniBuilding extends GameObject {
    constructor(screen) {
        super("miniBuilding");
        this.screen = screen;
        this.x = Math.random() * 600 + window.innerWidth;
    }
    getBoundingRect() {
        return this.div.getBoundingClientRect();
    }
}
//# sourceMappingURL=minibuilding.js.map