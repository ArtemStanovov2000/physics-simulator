import { Electron } from "../../elements/element";

const OFFSET = 5

export const createElectronOrbital = (radius: number, count: number, array: Electron[]) => {
    for (let i = 0; i < count; i++) {
        const poindOffset = Math.random() * 2 * Math.PI
        const xOffset = Math.sin(poindOffset) * radius + window.innerWidth / 2 + Math.random() * OFFSET - OFFSET / 2
        const yOffset = Math.cos(poindOffset) * radius + window.innerHeight / 2 + Math.random() * OFFSET - OFFSET / 2 - 100
        array.push(new Electron(xOffset, yOffset))
    }
}