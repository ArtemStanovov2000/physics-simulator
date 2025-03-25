import { Particle } from "./parts"

export const life = (parts: Particle[]) => {
    for (let i = 0; i < parts.length; i++) {
        parts[i].speedX += Math.random() * 0.01 - 0.005
        parts[i].speedY += Math.random() * 0.01 - 0.005
        parts[i].x += parts[i].speedX
        parts[i].y += parts[i].speedY

        if (parts[i].x < 0) {
            parts[i].x = window.innerWidth
        }

        if (parts[i].y < 0) {
            parts[i].y = window.innerHeight
        }

        if (parts[i].x > window.innerWidth) {
            parts[i].x = 0
        }

        if (parts[i].y > window.innerHeight) {
            parts[i].y = 0
        }

        for (let j = 0; j < parts.length; j++) {
            const distanse = Math.sqrt(Math.pow((parts[i].x - parts[j].x), 2) + Math.pow((parts[i].y - parts[j].y), 2))
            if(distanse < 4 && parts[i].isSick === "sick") {
                parts[j].color = "#ff5252"
                parts[j].isSick = "sick"
                parts[j].size = 3
            }
        }
    }
}