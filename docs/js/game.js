import { GamOverScreen } from "./endscreen.js";
import { GameScreen } from "./gamescreen.js";
import { StartScreen } from "./startscreen.js";
export class PirateGame {
    constructor() {
        this.startGame();
        this.gameLoop();
    }
    startGame() {
        this.interface = new StartScreen(this);
    }
    showGamOverScreen() {
        this.interface = new GamOverScreen(this);
    }
    showGameScreen() {
        this.interface = new GameScreen(this);
    }
    gameLoop() {
        this.interface.update();
        requestAnimationFrame(() => this.gameLoop());
    }
}
new PirateGame();
//# sourceMappingURL=game.js.map