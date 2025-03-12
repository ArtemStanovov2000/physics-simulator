import { GluonField } from "../../particle/GluonField"

const OFFSET = 30

export const movingGluonFieldExplanation = (gluonField: GluonField[]) => {
    for (let i = 0; i < gluonField.length; i++) {
        gluonField[i].speedX = (Math.random() * OFFSET - OFFSET / 2)
        gluonField[i].speedY = (Math.random() * OFFSET - OFFSET / 2)

        if (gluonField[i].coordinates.x < 0) {
            gluonField[i].coordinates.x = 960
        }
        if (gluonField[i].coordinates.x > 960) {
            gluonField[i].coordinates.x = 0
        }
        if (gluonField[i].coordinates.y < 0) {
            gluonField[i].coordinates.y = 500
        }
        if (gluonField[i].coordinates.y > 500) {
            gluonField[i].coordinates.y = 0
        }

        gluonField[i].move()
    }
}