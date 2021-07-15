import { GameObject } from "./gameobject.js";
export class StartScreen extends GameObject {
    constructor(pirateGame) {
        super("startscreen");
        this.pirateGame = pirateGame;
        const text = document.createElement("div");
        const btn = document.createElement("button");
        this.div.appendChild(text);
        this.div.appendChild(btn);
        text.innerText = "Pixel Piracy";
        btn.innerText = "Play Now ";
        btn.addEventListener("click", () => this.gotoGameScreen());
    }
    gotoGameScreen() {
        this.remove();
        this.pirateGame.showGameScreen();
    }
}
//# sourceMappingURL=startscreen.js.map