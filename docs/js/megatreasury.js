import { GameObject } from "./gameobject.js";
export class MegaTreasury extends GameObject {
    constructor(screen) {
        super("megaTreasury");
        this.health = 3;
        this.screen = screen;
        this.x = Math.random() * 600 + window.innerWidth;
    }
    update() {
    }
}
//# sourceMappingURL=megatreasury.js.map