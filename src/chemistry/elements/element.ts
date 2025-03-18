export class ChemicalElement {
    coordinates: {
        x: number
        y: number
    }
    label: {
        label: string,
        size: number,
        offsetX: number
        offsetY: number
    }
    mass: number
    charge: number
    color: string
    size: number
    electrons: number[]
    ionizationEnergy: number
    degreeOxidation: number[]

    constructor(coordinates: { x: number, y: number }, label: { label: string, size: number, offsetX: number, offsetY: number }, mass: number, charge: number, color: string, size: number, electrons: number[], ionizationEnergy: number, degreeOxidation: number[]) {
        this.coordinates = coordinates
        this.label = label
        this.mass = mass
        this.charge = charge
        this.color = color
        this.size = size
        this.electrons = electrons
        this.ionizationEnergy = ionizationEnergy
        this.degreeOxidation = degreeOxidation
    }
}

export class Hudrogen extends ChemicalElement {
    constructor(coordinates: { x: number, y: number }) {
        super(coordinates, { label: "H", size: 20, offsetX: 7, offsetY: 7}, 1, 1, "#909090", 16, [1], 13.59, [-1, 0, 1])
    }
}

