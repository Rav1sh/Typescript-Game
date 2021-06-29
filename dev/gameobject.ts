export class GameObject {

    protected x:number = 0
    protected y:number = 0
    protected div: HTMLElement

    constructor(x:string){
        const gameDiv = document.querySelector('game') as HTMLElement
        this.div = document.createElement(x)
        gameDiv.appendChild(this.div)
    }

    public getBoundingRect() : DOMRect {
        return this.div.getBoundingClientRect();
    }

    public remove() {
        this.div.remove()
    }

    public update() {
    }
}