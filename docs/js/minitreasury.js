import { GameObject } from "./gameobject.js";
export class MiniTreasury extends GameObject {
    constructor(screen) {
        super("miniTreasury");
        this.health = 3;
        this.screen = screen;
        this.x = Math.random() * 600 + window.innerWidth;
    }
    getBoundingRect() {
        return this.div.getBoundingClientRect();
    }
}
//# sourceMappingURL=minitreasury.js.map