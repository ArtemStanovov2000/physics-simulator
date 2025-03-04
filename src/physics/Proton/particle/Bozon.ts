export class Bozon {
    speedX: number;
    speedY: number;
    readonly spin: 1
    readonly group: "bozon"
    readonly family: "calibrationBoson"
    readonly size: 20
    textOffsetX: number
    textOffsetY: number
    id: number
    textSize: number
    colorQuark: "green" | "red" | "blue"
    coordinates: {
        x: number
        y: number
    }

    constructor(coordinates: {x: number, y: number}, textOffsetX: number, textOffsetY: number, speedY: number, speedX: number, colorQuark: "green" | "red" | "blue", id: number) {
        this.speedX = speedX
        this.speedY = speedY
        this.spin = 1
        this.group = "bozon"
        this.family = "calibrationBoson"
        this.size = 20
        this.textSize = 20
        this.colorQuark = colorQuark
        this.coordinates = coordinates
        this.textOffsetX = textOffsetX
        this.textOffsetY = textOffsetY
        this.id = id
    }

    setSpeed(speedY: number, speedX: number) {
        this.speedY = speedY
        this.speedX = speedX
    }

    move() {
        this.coordinates = {
            x: this.coordinates.x + this.speedX,
            y: this.coordinates.y + this.speedY
        }
    }
}