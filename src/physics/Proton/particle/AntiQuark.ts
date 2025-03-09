export class AntiQuark {
    speedX: number;
    speedY: number;
    spin: 0.5
    group: "antiquark"
    family: "fermion"
    size: 30
    textSize: number
    color: string
    colorQuark: "antigreen" | "antired" | "antiblue"
    textOffsetX: number
    textOffsetY: number
    coordinates: {
        x: number
        y: number
    }

    constructor(coordinates: { x: number, y: number }, textOffsetX: number, textOffsetY: number, colorQuark: "antigreen" | "antired" | "antiblue") {
        this.speedX = 0
        this.speedY = 0
        this.spin = 0.5
        this.group = "antiquark"
        this.family = "fermion"
        this.size = 30
        this.textSize = 35
        this.color = ""
        this.colorQuark = colorQuark
        this.textOffsetX = textOffsetX
        this.textOffsetY = textOffsetY
        this.coordinates = coordinates

        if (this.colorQuark === "antired") {
            this.color = "#40d5d5"
        } else if (this.colorQuark === "antigreen") {
            this.color = "#d540d5"
        } else if (this.colorQuark === "antiblue") {
            this.color = "#d5d540"
        }
    }

    setSpeed(speedY: number, speedX: number) {
        this.speedY = speedY
        this.speedX = speedX
    }

    setColor(colorQuark: "antigreen" | "antired" | "antiblue") {
        this.colorQuark = colorQuark
        if (this.colorQuark === "antired") {
            this.color = "#d54040"
        } else if (this.colorQuark === "antigreen") {
            this.color = "#40d540"
        } else if (this.colorQuark === "antiblue") {
            this.color = "#4040d5"
        }
    }
}