import { Quark } from "./Quark"

export class U_quark extends Quark {
    readonly charge: 0.666
    readonly mass: 2.16
    readonly generation: 1
    readonly name: "U"

    constructor(coordinates: {x: number, y: number}, colorQuark: "green" | "red" | "blue", id: number, speedX?: number, speedY?: number) {
        super(coordinates, 12, 13, colorQuark, id, speedX, speedY)
        this.charge = 0.666
        this.mass = 2.16
        this.generation = 1
        this.name = "U"
    }
}

export class D_quark extends Quark {
    readonly charge: -0.333
    readonly mass: 4.67
    readonly generation: 1
    readonly name: "D"

    constructor(coordinates: {x: number, y: number}, colorQuark: "green" | "red" | "blue", id: number, speedX?: number, speedY?: number) {
        super(coordinates, 12, 13, colorQuark, id, speedX, speedY)
        this.charge = -0.333
        this.mass = 4.67
        this.generation = 1
        this.name = "D"
    }
}

export class C_quark extends Quark {
    readonly charge: 0.666
    readonly mass: 1270
    readonly generation: 2
    readonly name: "C"

    constructor(coordinates: {x: number, y: number}, colorQuark: "green" | "red" | "blue", id: number, speedX?: number, speedY?: number) {
        super(coordinates, 12, 13, colorQuark, id, speedX, speedY)
        this.charge = 0.666
        this.mass = 1270
        this.generation = 2
        this.name = "C"
    }
}

export class S_quark extends Quark {
    readonly charge: -0.333
    readonly mass: 93.4
    readonly generation: 2
    readonly name: "S"

    constructor(coordinates: {x: number, y: number}, colorQuark: "green" | "red" | "blue", id: number, speedX?: number, speedY?: number) {
        super(coordinates, 12, 13, colorQuark, id, speedX, speedY)
        this.charge = -0.333
        this.mass = 93.4
        this.generation = 2
        this.name = "S"
    }
}

export class T_quark extends Quark {
    readonly charge: 0.666
    readonly mass: 172700
    readonly generation: 3
    readonly name: "T"

    constructor(coordinates: {x: number, y: number}, colorQuark: "green" | "red" | "blue", id: number, speedX?: number, speedY?: number) {
        super(coordinates, 12, 13, colorQuark, id, speedX, speedY)
        this.charge = 0.666
        this.mass = 172700
        this.generation = 3
        this.name = "T"
    }
}

export class B_quark extends Quark {
    readonly charge: -0.333
    readonly mass: 4180
    readonly generation: 3
    readonly name: "B"

    constructor(coordinates: {x: number, y: number}, colorQuark: "green" | "red" | "blue", id: number, speedX?: number, speedY?: number) {
        super(coordinates, 12, 13, colorQuark, id, speedX, speedY)
        this.charge = -0.333
        this.mass = 4180
        this.generation = 3
        this.name = "B"
    }
}

