import { Grid, BlackHole } from "./parts"

export const deleteGrid = (array: Grid[], blackHole: BlackHole) => {
    for (let i = 0; i < array.length; i++) {
        const distanse = Math.sqrt(Math.pow((blackHole.coordinates.x - array[i].coordinates.x), 2) + Math.pow((blackHole.coordinates.y - array[i].coordinates.y), 2))
        if(distanse < 290) {
            array.splice(i, 1)
        }
    }
}