import { GameObject } from "./gameobject.js";
export class MegaBuilding extends GameObject {
    constructor(screen) {
        super("megaBuilding");
        this.screen = screen;
        this.x = Math.random() * 600 + window.innerWidth;
    }
    getBoundingRect() {
        return this.div.getBoundingClientRect();
    }
}
//# sourceMappingURL=megabuilding.js.map