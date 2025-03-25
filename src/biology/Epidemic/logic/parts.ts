export type Particle = {
    x: number;
    y: number;
    speedX: number;
    speedY: number;
    size: number;
    isSick: "sick" | "noSick" | "immunity"
    color: "#ff5252" | "#b3b3b3" | "#ccff5e"
}

export const parts: Particle[] = []

const COUNT_PARTH = 3000

for (let i = 0; i < COUNT_PARTH; i++) {
    parts.push({
        x: Math.random() * window.innerWidth,
        y: Math.random() * window.innerHeight,
        speedX: 0,
        speedY: 0,
        size: 2,
        isSick: "noSick",
        color: "#b3b3b3"
    })
}

parts[2].color = "#ff5252"
parts[2].isSick = "sick"
parts[2].size = 3



