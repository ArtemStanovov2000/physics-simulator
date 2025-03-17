import { BaseRock } from "../baseRock/baseRock"

export type BlackHole = {
    mass: number,
    color: string,
    coordinates: {
        x: number,
        y: number
    },
    size: number
}

export const blackHole: BlackHole = {
    mass: 10,
    color: "#000000",
    coordinates: {
        x: window.innerWidth / 2,
        y: window.innerHeight / 2
    },
    size: 250
}

export type Grid = {
    color: string,
    coordinates: {
        x: number,
        y: number
    },
    size: number
    speedY: number
    speedX: number
}

export const grid: Grid[] = []

export const particle = [{
    color: "#505050",
    coordinates: {
        x: window.innerWidth / 2,
        y: window.innerHeight / 2 - 250
    },
    size: 4.3,
    speedY: 0,
    speedX: 3.3,
}]

export const elements: BaseRock[] = []



