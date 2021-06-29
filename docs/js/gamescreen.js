import { Background } from "./background.js";
import { GameObject } from "./gameobject.js";
import { Robot } from "./robot.js";
import { Treasury } from "./treasury.js";
import { MiniTreasury } from "./minitreasury.js";
import { MegaTreasury } from "./megatreasury.js";
export class GameScreen extends GameObject {
    constructor(g) {
        super("gamescreen");
        this.robots = [];
        this.treasury = [];
        this.miniTreasury = [];
        this.megaTreasury = [];
        this.game = g;
        const text = document.createElement("instructions");
        this.element.appendChild(text);
        text.innerHTML = "Defend your treasuries! Click on the sailors to eliminate them.";
        this.background = new Background();
        this.robots.push(new Robot(this), new Robot(this), new Robot(this), new Robot(this), new Robot(this), new Robot(this), new Robot(this), new Robot(this), new Robot(this));
        this.treasury.push(new Treasury(this));
        this.miniTreasury.push(new MiniTreasury(this));
        this.megaTreasury.push(new MegaTreasury(this));
    }
    removeRobot(robot) {
        this.robots = this.robots.filter(rob => rob != robot);
        if (this.robots.length == 0) {
            this.remove();
            this.game.showEndScreen();
        }
    }
    removeTreasury(treasury) {
        this.treasury = this.treasury.filter(treasure => treasure != treasury);
        if (this.treasury.length == 0) {
            this.remove();
            this.game.showEndScreen();
        }
    }
    update() {
        this.background.update();
        for (let o of this.robots) {
            o.update();
        }
    }
    remove() {
        this.background.remove();
        super.remove();
    }
}
//# sourceMappingURL=gamescreen.js.map