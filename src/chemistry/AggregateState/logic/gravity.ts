import { Particle } from "./parts"

export const gravity = (array: Particle[]) => {
    for (let i = 0; i < array.length; i++) {
        let deltaX = 0
        let deltaY = 0

        if (array[i].x < 0) {
            array[i].x = window.innerWidth
        }
        if (array[i].x > window.innerWidth) {
            array[i].x = 0
        }
        if (array[i].y < 0) {
            array[i].y = window.innerHeight
        }
        if (array[i].y > window.innerHeight) {
            array[i].speedY = array[i].speedY * -1
        }

        array[i].speedY += 0.1

        const distanseY = (window.innerHeight - array[i].y)
        if (distanseY > 0) {
            deltaY += Math.pow((1 / distanseY), 2) * 30
        }

        const distanseYStart = array[i].y
        if (distanseYStart > 0) {
            deltaY -= Math.pow((1 / distanseYStart), 2) * 60
        }

        const distanseXRight = (window.innerWidth - array[i].x)
        if (distanseXRight > 0) {
            deltaX += Math.pow((1 / distanseXRight), 2) * 30
        }

        const distanseXLeft = array[i].x
        if (distanseXRight > 0) {
            deltaX -= Math.pow((1 / distanseXLeft), 2) * 30
        }

        if (array[i].speedY > 5) {
            array[i].speedY = 5
        }

        for (let j = 0; j < array.length; j++) {
            const distanse = Math.sqrt(Math.pow((array[i].x - array[j].x), 2) + Math.pow((array[i].y - array[j].y), 2))
            if (distanse === 0) {
                deltaX += 0
                deltaY += 0
            } else if (distanse > 60 && distanse < 40) {
                deltaX -= (array[i].x - array[j].x) * 0.0003
                deltaY -= (array[i].y - array[j].y) * 0.0003
            } else if (distanse < 40) {
                deltaX -= (array[i].x - array[j].x) * 0.0019
                deltaY -= (array[i].y - array[j].y) * 0.0019
            } else {
                deltaX -= ((array[i].x - array[j].x) * Math.pow((1 / distanse), 2)) / 100
                deltaY -= ((array[i].y - array[j].y) * Math.pow((1 / distanse), 2)) / 100
            }
        }

        array[i].speedX = array[i].speedX - deltaX
        array[i].speedY = array[i].speedY - deltaY
        array[i].speedX = array[i].speedX * 0.96
        array[i].speedY = array[i].speedY * 0.96
        array[i].x += array[i].speedX
        array[i].y += array[i].speedY
    }
}