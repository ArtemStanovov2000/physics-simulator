import { GluonField } from "../particle/GluonField"
import { AllQuarks } from "./parts"

const OFFSET = 20
const DISTANSE = 180

export const movingGluonField = (gluonField: GluonField[], mezon?: AllQuarks[], quarks?: AllQuarks[]) => {
    if (mezon && quarks) {
        const particle = mezon.concat(quarks)

        for (let i = 0; i < gluonField.length; i++) {
            gluonField[i].speedX = (Math.random() * OFFSET - OFFSET / 2)
            gluonField[i].speedY = (Math.random() * OFFSET - OFFSET / 2)
            gluonField[i].setColor(`rgba(65, 65, 65, 1)`)

            if (gluonField[i].coordinates.x < 0) {
                gluonField[i].coordinates.x = window.innerWidth
            }
            if (gluonField[i].coordinates.x > window.innerWidth) {
                gluonField[i].coordinates.x = 0
            }
            if (gluonField[i].coordinates.y < 0) {
                gluonField[i].coordinates.y = window.innerHeight
            }
            if (gluonField[i].coordinates.y > window.innerHeight) {
                gluonField[i].coordinates.y = 0
            }

            for (let j = 0; j < particle.length; j++) {
                const distanse = Math.sqrt(Math.pow(gluonField[i].coordinates.x - particle[j].coordinates.x, 2) + Math.pow(gluonField[i].coordinates.y - particle[j].coordinates.y, 2))
                if (distanse < DISTANSE) {
                    gluonField[i].speedX = (Math.random() * OFFSET - OFFSET / 2) * Math.pow(distanse / DISTANSE, 2)
                    gluonField[i].speedY = (Math.random() * OFFSET - OFFSET / 2) * Math.pow(distanse / DISTANSE, 2)
                    gluonField[i].setColor(`rgba(65, 65, 65, ${Math.pow(distanse / DISTANSE, 1.5) - 0.3})`)
                    if (Math.random() < 0.003) {
                        gluonField[i].coordinates.y = window.innerWidth * Math.random()
                        gluonField[i].coordinates.y = window.innerHeight * Math.random()
                    }
                }
            }

            gluonField[i].move()
        }
    }
}