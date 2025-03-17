import { Grid, BlackHole } from "./parts"
import { BaseRock } from "../baseRock/baseRock"

export const deleteGrid = (array: Grid[] | BaseRock[], blackHole: BlackHole) => {
    for (let i = 0; i < array.length; i++) {
        const distanse = Math.sqrt(Math.pow((blackHole.coordinates.x - array[i].coordinates.x), 2) + Math.pow((blackHole.coordinates.y - array[i].coordinates.y), 2))
        if(distanse < (blackHole.size - 20)) {
            array.splice(i, 1)
        }
    }
}