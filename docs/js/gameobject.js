export class GameObject {
    constructor(x) {
        this.x = 0;
        this.y = 0;
        const gameDiv = document.querySelector('game');
        this.div = document.createElement(x);
        gameDiv.appendChild(this.div);
    }
    getBoundingRect() {
        return this.div.getBoundingClientRect();
    }
    remove() {
        this.div.remove();
    }
    update() {
    }
}
//# sourceMappingURL=gameobject.js.map