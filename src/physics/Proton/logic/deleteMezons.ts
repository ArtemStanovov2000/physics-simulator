import { mezons } from "./parts"

export const deleteMezons = () => {
    for (let i = 0; i < mezons.length; i++) {
        if (mezons[i].coordinates.x < 0 || mezons[i].coordinates.x > window.innerWidth || mezons[i].coordinates.y < 0 || mezons[i].coordinates.y > window.innerHeight) {
            mezons.splice(i, 1)
        }
    }
}