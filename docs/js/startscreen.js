import { GameObject } from "./gameobject.js";
export class StartScreen extends GameObject {
    constructor(monsterGame) {
        super("startscreen");
        this.monsterGame = monsterGame;
        const text = document.createElement("div");
        const btn = document.createElement("button");
        this.div.appendChild(text);
        this.div.appendChild(btn);
        text.innerText = "🧟";
        btn.innerText = "Start Now ";
        btn.addEventListener("click", () => this.gotoGameScreen());
    }
    gotoGameScreen() {
        this.remove();
        this.monsterGame.showGameScreen();
    }
}
//# sourceMappingURL=startscreen.js.map