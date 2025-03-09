export class GluonField {
    speedX: number
    speedY: number
    size: number
    color: string
    coordinates: {
        x: number
        y: number
    }

    constructor(coordinates: { x: number, y: number }) {
        this.speedX = 0
        this.speedY = 0
        this.size = 2
        this.color = ""
        this.coordinates = coordinates
    }

    move() {
        this.coordinates = {
            x: this.coordinates.x + this.speedX,
            y: this.coordinates.y + this.speedY
        }
    }

    setColor(color: string) {
        this.color = color
    }
}