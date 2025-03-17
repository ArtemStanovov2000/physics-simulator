import { Grid, BlackHole } from "./parts"
import { BaseRock } from "../baseRock/baseRock"
import { SPEED_OF_LIGHT } from "./const"

export const gravity = (array: Grid[], blackHole: BlackHole) => {
    for (let i = 0; i < array.length; i++) {
        let deltaX = 0
        let deltaY = 0
        const distanse = Math.sqrt(Math.pow((blackHole.coordinates.x - array[i].coordinates.x), 2) + Math.pow((blackHole.coordinates.y - array[i].coordinates.y), 2))
        if (distanse < 20) {
            deltaX += 0
            deltaY += 0
        } else {
            deltaX += ((array[i].coordinates.x - blackHole.coordinates.x) * Math.pow((1 / distanse), 2)) * blackHole.mass
            deltaY += ((array[i].coordinates.y - blackHole.coordinates.y) * Math.pow((1 / distanse), 2)) * blackHole.mass
        }
        array[i].speedX = array[i].speedX - deltaX
        array[i].speedY = array[i].speedY - deltaY
        array[i].coordinates.x += array[i].speedX
        array[i].coordinates.y += array[i].speedY
    }
}

export const gravityElements = (array: BaseRock[], blackHole: BlackHole) => {
    for (let i = 0; i < array.length; i++) {
        let deltaX = 0
        let deltaY = 0
        const distanse = Math.sqrt(Math.pow((blackHole.coordinates.x - array[i].coordinates.x), 2) + Math.pow((blackHole.coordinates.y - array[i].coordinates.y), 2))
        if (distanse < 20) {
            deltaX += 0
            deltaY += 0
        } else {
            deltaX += ((array[i].coordinates.x - blackHole.coordinates.x) * Math.pow((1 / distanse), 2)) * blackHole.mass
            deltaY += ((array[i].coordinates.y - blackHole.coordinates.y) * Math.pow((1 / distanse), 2)) * blackHole.mass
        }

        const speed = Math.sqrt(Math.pow(array[i].speedX, 2) + Math.pow(array[i].speedY, 2))
        const deltaSpeed = Math.sqrt(Math.pow(deltaX, 2) + Math.pow(deltaY, 2))
        const deltaSpeedXPart = deltaX / deltaSpeed
        const deltaSpeedYPart = deltaY / deltaSpeed
        const sumSpeed = (speed + deltaSpeed) / (1 + ((speed * deltaSpeed)) / Math.pow(SPEED_OF_LIGHT, 2))
        array[i].speed = sumSpeed
        array[i].Zindex = 1 / Math.sqrt(1 - Math.pow(sumSpeed, 2) / Math.pow(SPEED_OF_LIGHT, 2))
        array[i].speedX = sumSpeed * deltaSpeedXPart
        array[i].speedY = sumSpeed * deltaSpeedYPart
        array[i].coordinates.x -= array[i].speedX
        array[i].coordinates.y -= array[i].speedY
    }
}