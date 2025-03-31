import { ParticlePlanets } from "./parts"

const SPEED = 3000
const RADIUS = 320

export const moonMove = (element: ParticlePlanets, frameIndex: number) => {
    element.x = Math.cos((2 * Math.PI / SPEED) * frameIndex) * RADIUS + window.innerWidth / 2
    element.y = Math.sin((2 * Math.PI / SPEED) * frameIndex) * RADIUS + window.innerHeight / 2
}