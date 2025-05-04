import { Bozon } from "./Bozon";

export class Z_bozon extends Bozon {
    readonly charge: 0
    readonly mass: 91200
    readonly name: "Z0"
    readonly color: "#303030"

    constructor(coordinates: {x: number, y: number}, colorBozon: "green" | "red" | "blue") {
        super(coordinates, 13, 7, colorBozon)
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

    constructor(coordinates: {x: number, y: number}, colorBozon: "green" | "red" | "blue") {
        super(coordinates, 15, 7, colorBozon)
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

    constructor(coordinates: {x: number, y: number}, colorBozon: "green" | "red" | "blue") {
        super(coordinates, 14, 7, colorBozon)
        this.name = "W-"
        this.charge = -1
        this.mass = 80400
        this.color = "#49423d"
        this.spin = 1
    }
}