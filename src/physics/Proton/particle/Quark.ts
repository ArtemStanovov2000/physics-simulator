export class Quark {
    speedX: number;
    speedY: number;
    readonly spin: 0.5
    readonly group: "quark"
    readonly family: "fermion"
    readonly size: 30
    textSize: number
    id: number
    private color: string
    colorQuark: "green" | "red" | "blue"
    textOffsetX: number
    textOffsetY: number
    coordinates: {
        x: number
        y: number
    }

    constructor(coordinates: { x: number, y: number }, textOffsetX: number, textOffsetY: number, colorQuark: "green" | "red" | "blue", id: number) {
        this.speedX = 0
        this.speedY = 0
        this.spin = 0.5
        this.group = "quark"
        this.family = "fermion"
        this.size = 30
        this.colorQuark = colorQuark
        this.textSize = 35
        this.id = id
        this.color = ""
        this.coordinates = coordinates
        this.textOffsetX = textOffsetX
        this.textOffsetY = textOffsetY

        if (this.colorQuark === "red") {
            this.color = "#d54040"
        } else if (this.colorQuark === "green") {
            this.color = "#40d540"
        } else if (this.colorQuark === "blue") {
            this.color = "#4040d5"
        }
    }

    setSpeed(speedY: number, speedX: number) {
        this.speedY = speedY
        this.speedX = speedX
    }

    changeColor() {
        if (this.colorQuark === "red") {
            const flag = Math.random() > 0.5
            flag ? this.color = "#40d540" : this.color = "#4040d5"
            flag ? this.colorQuark = "green" : this.colorQuark = "blue"
        } else if (this.colorQuark === "green") {
            const flag = Math.random() > 0.5
            flag ? this.color = "#d54040" : this.color = "#4040d5"
            flag ? this.colorQuark = "red" : this.colorQuark = "blue"
        } else if (this.colorQuark === "blue") {
            const flag = Math.random() > 0.5
            flag ? this.color = "#d54040" : this.color = "#40d540"
            flag ? this.colorQuark = "red" : this.colorQuark = "green"
        }
    }

    getColor() {
        return this.color
    }
}