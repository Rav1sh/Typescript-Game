import { GameObject } from "./gameobject.js";
export class MegaTreasury extends GameObject {
    constructor(screen) {
        super("megaTreasury");
        this.health = 3;
        this.screen = screen;
        this.x = Math.random() * 600 + window.innerWidth;
    }
    getBoundingRect() {
        return this.div.getBoundingClientRect();
    }
}
//# sourceMappingURL=megatreasury.js.map