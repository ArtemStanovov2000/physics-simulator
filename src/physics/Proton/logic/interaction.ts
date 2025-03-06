import { Quark, Bozon } from "./parts"
import { GluonField } from "../particle/GluonField"

export const interaction = (bozons: Bozon[], quarks: Quark[], gluonField: GluonField[]) => {
    for (let i = 0; i < gluonField.length; i++) {
        gluonField[i].speedX = (Math.random() * 1 - 0.5) / Math.pow(gluonField[i].coordinates.x + Math.random() * 10 - 5 - gluonField[i].baseCoordinates.x, 2)
        gluonField[i].speedY = (Math.random() * 1 - 0.5) / Math.pow(gluonField[i].coordinates.y + Math.random() * 10 - 5 - gluonField[i].baseCoordinates.y, 2)
        gluonField[i].move()
    }
}