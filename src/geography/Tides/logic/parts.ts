export type ParticleWater = {
    x: number;
    y: number;
    speedX: number;
    speedY: number;
    size: number;
    color: string;
}

export type ParticlePlanets = {
    x: number;
    y: number;
    mass: number;
    size: number;
    color: string;
}

export const tidesParts: ParticleWater[] = []
export const planets: ParticlePlanets[] = []

export const createParth = (radius: number) => {
    const LENGTH_ARC = 3
    const LENGTH_SPACE = 1
    const sumLength = LENGTH_ARC + LENGTH_SPACE
    const countArc = Math.floor(radius * 2 * Math.PI / sumLength)

    for (let i = 0; i < countArc; i++) {
        tidesParts.push({
            x: Math.cos((2 * Math.PI / countArc) * i) * radius + window.innerWidth / 2,
            y: Math.sin((2 * Math.PI / countArc) * i) * radius + window.innerHeight / 2,
            speedX: 0,
            speedY: 0,
            size: Math.sqrt(4),
            color: "#55b6d5"
        })
    }
}

const size = 100

createParth(size + 1)
createParth(size + 1.2)
createParth(size + 1.4)
createParth(size + 1.6)
createParth(size + 1.8)

planets[0] = {
    x: Math.floor(window.innerWidth / 2),
    y: Math.floor(window.innerHeight / 2),
    mass: 300,
    size: size,
    color: "#d5b699"
}

planets[1] = {
    x: Math.floor(window.innerWidth / 2) + 300,
    y: Math.floor(window.innerHeight / 2),
    mass: 190,
    size: 30,
    color: "#d5b699"
}