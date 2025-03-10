export class Quark {
    speedX: number;
    speedY: number;
    spin: 0.5
    group: "quark"
    family: "fermion"
    id: number
    size: 30
    textSize: number
    color: string
    colorQuark: "green" | "red" | "blue"
    anticolorQuark: "antigreen" | "antired" | "antiblue"
    textOffsetX: number
    textOffsetY: number
    coordinates: {
        x: number
        y: number
    }

    constructor(coordinates: { x: number, y: number }, textOffsetX: number, textOffsetY: number, colorQuark: "green" | "red" | "blue", id: number, speedX?: number, speedY?: number) {
        this.speedX = speedX || 0
        this.speedY = speedY || 0
        this.spin = 0.5
        this.group = "quark"
        this.family = "fermion"
        this.id = id
        this.size = 30
        this.textSize = 35
        this.color = ""
        this.colorQuark = colorQuark
        this.anticolorQuark = "antiblue"
        this.textOffsetX = textOffsetX
        this.textOffsetY = textOffsetY
        this.coordinates = coordinates

        if (this.colorQuark === "red") {
            this.color = "#d54040"
            this.anticolorQuark = "antired"
        } else if (this.colorQuark === "green") {
            this.color = "#40d540"
            this.anticolorQuark = "antigreen"
        } else if (this.colorQuark === "blue") {
            this.color = "#4040d5"
            this.anticolorQuark = "antiblue"
        }
    }

    setSpeed(speedY: number, speedX: number) {
        this.speedY = speedY
        this.speedX = speedX
    }

    move() {
        this.coordinates.x += this.speedX
        this.coordinates.y += this.speedY
    }

    setColor(colorQuark: "green" | "red" | "blue") {
        this.colorQuark = colorQuark
        if (this.colorQuark === "red") {
            this.color = "#d54040"
            this.anticolorQuark = "antired"
        } else if (this.colorQuark === "green") {
            this.color = "#40d540"
            this.anticolorQuark = "antigreen"
        } else if (this.colorQuark === "blue") {
            this.color = "#4040d5"
            this.anticolorQuark = "antiblue"
        }
    }
}