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
            x: window.innerWidth * Math.random(),
            y: window.innerHeight * Math.random(),
            speedX: Math.random() * 0.2 - 0.1,
            speedY: Math.random() * 0.2 - 0.1,
            mass: 1,
            size: 6,
            color: "#f54040"
        })
    }
}

createParth()


