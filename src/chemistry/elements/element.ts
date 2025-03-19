export class Proton {
    mass: number
    size: number
    color: string
    speedX: number
    speedY: number
    coordinates: {
        x: number
        y: number
    }

    constructor(x: number, y: number) {
        this.mass = 1
        this.size = 5
        this.color = "#d54040"
        this.coordinates = {x: x, y: y}
        this.speedX = 0
        this.speedY = 0
    }

    move() {
        this.coordinates.x += this.speedX
        this.coordinates.y += this.speedY
    }
}

export class Neutron {
    mass: number
    size: number
    color: string
    speedX: number
    speedY: number
    coordinates: {
        x: number
        y: number
    }

    constructor(x: number, y: number) {
        this.mass = 1
        this.size = 5
        this.color = "#606060"
        this.coordinates = {x: x, y: y}
        this.speedX = 0
        this.speedY = 0
    }

    move() {
        this.coordinates.x += this.speedX
        this.coordinates.y += this.speedY
    }
}

export class Electron {
    mass: number
    size: number
    color: string
    coordinates: {
        x: number
        y: number
    }

    constructor(x: number, y: number) {
        this.mass = 1
        this.size = 2
        this.color = "#909090"
        this.coordinates = {x: x, y: y}
    }
}


