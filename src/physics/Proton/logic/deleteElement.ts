import { Bozon, AllQuarks } from "./parts"

export const deleteElement = (array: Array<Bozon[] | AllQuarks[]>) => {
    for (let i = 0; i < array.length; i++) {
        for (let j = array[i].length; j > 0; j--) {
            array[i].pop()
        }
    }
}