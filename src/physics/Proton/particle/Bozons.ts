import { Bozon } from "./Bozon";

export class Z_bozon extends Bozon {
    readonly charge: 0
    readonly mass: 91200
    readonly name: "Z0"
    readonly color: "#303030"
    readonly spin: 1

    constructor(coordinates: {x: number, y: number}, speedY: number, speedX: number, colorBozon: "green" | "red" | "blue", id: number) {
        super(coordinates, 13, 7, speedY, speedX, colorBozon, id)
        this.name = "Z0"
        this.charge = 0
        this.mass = 91200
        this.color = "#303030"
        this.spin = 1
    }
}

export class WPositiwe_bozon extends Bozon {
    readonly charge: 1
    readonly mass: 80400
    readonly name: "W+"
    readonly color: "#403a3a"
    readonly spin: 1

    constructor(coordinates: {x: number, y: number}, speedY: number, speedX: number, colorBozon: "green" | "red" | "blue", id: number) {
        super(coordinates, 15, 7, speedY, speedX, colorBozon, id)
        this.name = "W+"
        this.charge = 1
        this.mass = 80400
        this.color = "#403a3a"
        this.spin = 1
    }
}

export class WNegative_bozon extends Bozon {
    readonly charge: -1
    readonly mass: 80400
    readonly name: "W-"
    readonly color: "#49423d"
    readonly spin: 1

    constructor(coordinates: {x: number, y: number}, speedY: number, speedX: number, colorBozon: "green" | "red" | "blue", id: number) {
        super(coordinates, 14, 7, speedY, speedX, colorBozon, id)
        this.name = "W-"
        this.charge = -1
        this.mass = 80400
        this.color = "#49423d"
        this.spin = 1
    }
}