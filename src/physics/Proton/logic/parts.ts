import { colors } from "./colors";

export type Particle = {
    x: number;
    y: number;
    speedX: number;
    speedY: number;
    charge: number;
    size: number;
    color: string;
}

export const parts: Particle[] = []

const COUNT_PARTH = 3
const RADIUS_PROTON = 200
const SIZE_QUARK = 30

export const createParth = () => {
    for (let i = 0; i < COUNT_PARTH; i++) {
        parts.push({
            x: Math.floor(window.innerWidth / 2) + Math.random() * 10,
            y: (window.innerHeight / 2) - 330 + Math.random() * 10,
            speedX: 0,
            speedY: 0,
            charge: 1,
            size: SIZE_QUARK,
            color: colors()
        })
    }
}

createParth()

parts[0] = {
    x: Math.floor(window.innerWidth / 2),
    y: Math.floor(window.innerHeight / 2) + RADIUS_PROTON,
    speedX: 0,
    speedY: 0,
    charge: 1,
    size: SIZE_QUARK,
    color: "#ff3030"
}

parts[1] = {
    x: Math.floor(window.innerWidth / 2) - RADIUS_PROTON * Math.sqrt(3) / 2,
    y: Math.floor(window.innerHeight / 2) - RADIUS_PROTON * 0.5,
    speedX: 0,
    speedY: 0,
    charge: 1,
    size: SIZE_QUARK,
    color: "#30ff30"
}

parts[2] = {
    x: Math.floor(window.innerWidth / 2) + RADIUS_PROTON * Math.sqrt(3) / 2,
    y: Math.floor(window.innerHeight / 2) - RADIUS_PROTON * 0.5,
    speedX: 0,
    speedY: 0,
    charge: 1,
    size: SIZE_QUARK,
    color: "#3030ff"
}