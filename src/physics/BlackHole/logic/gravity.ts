import { Grid, BlackHole } from "./parts"

export const gravity = (array: Grid[], blackHole: BlackHole) => {
    for (let i = 0; i < array.length; i++) {
        let deltaX = 0
        let deltaY = 0
        const distanse = Math.sqrt(Math.pow((blackHole.coordinates.x - array[i].coordinates.x), 2) + Math.pow((blackHole.coordinates.y - array[i].coordinates.y), 2))
        if (distanse < 290) {
            deltaX += 0
            deltaY += 0
        } else {
            deltaX += ((array[i].coordinates.x - blackHole.coordinates.x) * Math.pow((1 / distanse), 2)) * 2
            deltaY += ((array[i].coordinates.y - blackHole.coordinates.y) * Math.pow((1 / distanse), 2)) * 2
        }
        array[i].speedX = array[i].speedX - deltaX
        array[i].speedY = array[i].speedY - deltaY
        array[i].coordinates.x += array[i].speedX
        array[i].coordinates.y += array[i].speedY
    }
}