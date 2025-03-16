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
    color: string
    size: number

    constructor(coordinates: { x: number, y: number }, label: { label: string, size: number, offsetX: number, offsetY: number}, mass: number, color: string, size: number) {
        this.coordinates = coordinates
        this.label = label
        this.mass = mass
        this.color = color
        this.size = size
    }
}


