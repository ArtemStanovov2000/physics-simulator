import { colors } from "./colors";

export type Particle = {
    x: number;
    y: number;
    speedX: number;
    speedY: number;
    mass: number;
    size: number;
    color: string;
}

export const parts: Particle[] = []

const COUNT_PARTH = 300

export const createParth = () => {
    for (let i = 0; i < COUNT_PARTH; i++) {
        parts.push({
            x: Math.floor(window.innerWidth / 2) + Math.random() * 10,
            y: (window.innerHeight / 2) - 330 + Math.random() * 10,
            speedX: 2.09,
            speedY: 0,
            mass: 0.05,
            size: Math.sqrt(4),
            color: colors()
        })
    }
}

createParth()

parts[0] = {
    x: Math.floor(window.innerWidth / 2),
    y: Math.floor(window.innerHeight / 2),
    speedX: 0,
    speedY: 0,
    mass: 1000,
    size: Math.sqrt(300),
    color: colors()
}