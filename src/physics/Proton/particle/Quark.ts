export class Quark {
    speedX: number;
    speedY: number;
    spin: 0.5
    group: "quark"
    family: "fermion"
    size: 30
    textSize: number
    color: string
    colorQuark: "green" | "red" | "blue"
    textOffsetX: number
    textOffsetY: number
    coordinates: {
        x: number
        y: number
    }

    constructor(coordinates: { x: number, y: number }, textOffsetX: number, textOffsetY: number, colorQuark: "green" | "red" | "blue") {
        this.speedX = 0
        this.speedY = 0
        this.spin = 0.5
        this.group = "quark"
        this.family = "fermion"
        this.size = 30
        this.textSize = 35
        this.color = ""
        this.colorQuark = colorQuark
        this.textOffsetX = textOffsetX
        this.textOffsetY = textOffsetY
        this.coordinates = coordinates

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

    setColor(colorQuark: "green" | "red" | "blue") {
        this.colorQuark = colorQuark
        if (this.colorQuark === "red") {
            this.color = "#d54040"
        } else if (this.colorQuark === "green") {
            this.color = "#40d540"
        } else if (this.colorQuark === "blue") {
            this.color = "#4040d5"
        }
    }
}