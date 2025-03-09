export class Bozon {
    readonly spin: 1
    readonly group: "bozon"
    readonly family: "calibrationBoson"
    readonly size: 20
    textOffsetX: number
    textOffsetY: number
    textSize: number
    colorBozon: "green" | "red" | "blue"
    coordinates: {
        x: number
        y: number
    }

    constructor(coordinates: { x: number, y: number }, textOffsetX: number, textOffsetY: number, colorBozon: "green" | "red" | "blue") {
        this.spin = 1
        this.group = "bozon"
        this.family = "calibrationBoson"
        this.size = 20
        this.textSize = 20
        this.colorBozon = colorBozon
        this.coordinates = coordinates
        this.textOffsetX = textOffsetX
        this.textOffsetY = textOffsetY
    }

    getColorBozon() {
        return this.colorBozon
    }
}