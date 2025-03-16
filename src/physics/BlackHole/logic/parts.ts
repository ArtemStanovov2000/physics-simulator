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
    mass: 4000,
    color: "#000000",
    coordinates: {
        x: window.innerWidth / 2,
        y: window.innerHeight / 2
    },
    size: 300
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

for (let i = -300; i < window.innerHeight + 300; i += 150) {
    for (let j = 0; j < window.innerWidth; j += 14) {
        grid.push({
            color: "#353535",
            coordinates: {
                x: j,
                y: i
            },
            size: 2,
            speedY: 0,
            speedX: 0
        })
    }
}

for (let i = -300; i < window.innerHeight + 300; i += 14) {
    for (let j = 0; j < window.innerWidth; j += 150) {
        grid.push({
            color: "#353535",
            coordinates: {
                x: j,
                y: i
            },
            size: 2,
            speedY: 0,
            speedX: 0
        })
    }
}



