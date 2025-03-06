export class GluonField {
    speedX: number
    speedY: number
    size: number
    color: string
    baseCoordinates: {
        x: number
        y: number
    }
    coordinates: {
        x: number
        y: number
    }

    constructor(baseCoordinates: { x: number, y: number }) {
        this.speedX = 0
        this.speedY = 0
        this.size = 2
        this.color = "#353535"
        this.baseCoordinates = baseCoordinates
        this.coordinates = baseCoordinates
    }

    move() {
        this.coordinates = {
            x: this.baseCoordinates.x + this.speedX,
            y: this.coordinates.y + this.speedY
        }
    }
}