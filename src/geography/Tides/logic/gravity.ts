import { ParticleWater, ParticlePlanets } from "./parts"

export const gravity = (tidesParts: ParticleWater[], planets: ParticlePlanets[]) => {
    for (let i = 0; i < tidesParts.length; i++) {
        let deltaX = Math.random() * 0.01 - 0.005
        let deltaY = Math.random() * 0.01 - 0.005
        for (let j = 0; j < planets.length; j++) {
            const distanse = Math.sqrt(Math.pow((tidesParts[i].x - planets[j].x), 2) + Math.pow((tidesParts[i].y - planets[j].y), 2))
            if (distanse === 0) {
                deltaX += 0
                deltaY += 0
            } else if (distanse < (tidesParts[i].size + planets[j].size)) {
                deltaX -= ((tidesParts[i].x - planets[j].x) * Math.pow((1 / distanse), 2)) / 20 * planets[j].mass
                deltaY -= ((tidesParts[i].y - planets[j].y) * Math.pow((1 / distanse), 2)) / 20 * planets[j].mass
            } else {
                deltaX += ((tidesParts[i].x - planets[j].x) * Math.pow((1 / distanse), 2)) / 200 * planets[j].mass
                deltaY += ((tidesParts[i].y - planets[j].y) * Math.pow((1 / distanse), 2)) / 200 * planets[j].mass
            }
        }
        tidesParts[i].speedX = tidesParts[i].speedX - deltaX
        tidesParts[i].speedY = tidesParts[i].speedY - deltaY
        tidesParts[i].speedX = tidesParts[i].speedX * 0.99
        tidesParts[i].speedY = tidesParts[i].speedY * 0.99
        tidesParts[i].x += tidesParts[i].speedX
        tidesParts[i].y += tidesParts[i].speedY
    }

    for (let i = 0; i < tidesParts.length; i++) {
        let deltaX = Math.random() * 0.01 - 0.005
        let deltaY = Math.random() * 0.01 - 0.005
        for (let j = 0; j < tidesParts.length; j++) {
            const distanse = Math.sqrt(Math.pow((tidesParts[i].x - tidesParts[j].x), 2) + Math.pow((tidesParts[i].y - tidesParts[j].y), 2))
            if (distanse === 0) {
                deltaX += 0
                deltaY += 0
            } else {
                deltaX -= ((tidesParts[i].x - tidesParts[j].x) * Math.pow((1 / distanse), 2)) / 2000
                deltaY -= ((tidesParts[i].y - tidesParts[j].y) * Math.pow((1 / distanse), 2)) / 2000
            }
        }
        tidesParts[i].speedX = tidesParts[i].speedX - deltaX
        tidesParts[i].speedY = tidesParts[i].speedY - deltaY
        tidesParts[i].speedX = tidesParts[i].speedX * 0.99
        tidesParts[i].speedY = tidesParts[i].speedY * 0.99
        tidesParts[i].x += tidesParts[i].speedX
        tidesParts[i].y += tidesParts[i].speedY
    }
}