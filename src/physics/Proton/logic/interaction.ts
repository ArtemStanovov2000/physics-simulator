import { Quark, Bozon, AllQuarks, mezons } from "./parts"
import { GluonField } from "../particle/GluonField"
import { protonPageCoordinates } from "../coordinates"
import { deleteElement } from "./deleteElement"
import { movingGluonField } from "./movingGluonField"
import { interactionWeakForse } from "./interactionWeakForse"
import { replacingQuarks } from "./replacingQuarks"
import { createVirtualQuarks } from "./createVirtualQuarks"
import { returnQuarksOnPlace } from "./returnQuarksOnPlace"
import { U_quark } from "../particle/Quarks"
import { Anti_U_quark } from "../particle/AntiQuarks"
import { deleteMezons } from "./deleteMezons"

export const interaction = (virtualParticle: AllQuarks[], bozons: Bozon[], quarks: Quark[], gluonField: GluonField[], mouseDoun: boolean) => {
    deleteElement([bozons, virtualParticle])

    if (mouseDoun === true) {
        const coordX = protonPageCoordinates.getCoordinates().xCoordinates
        const coordY = protonPageCoordinates.getCoordinates().yCoordinates

        for (let i = 0; i < quarks.length; i++) {
            if (Math.sqrt(Math.pow(coordX - quarks[i].coordinates.x, 2) + Math.pow(coordY - quarks[i].coordinates.y, 2)) < quarks[i].size * 2) {
                if (Math.sqrt(Math.pow(window.innerWidth / 2 - quarks[i].coordinates.x, 2) + Math.pow(window.innerHeight / 2 - quarks[i].coordinates.y, 2)) < 400) {
                    quarks[i].speedX = (coordX - quarks[i].coordinates.x)
                    quarks[i].speedY = (coordY - quarks[i].coordinates.y)
                    quarks[i].move()
                } else {
                    const speedX = Math.random() * 14 - 7
                    const speedY = Math.random() * 14 - 7
                    console.log(quarks[i].colorQuark, quarks[i].anticolorQuark)
                    mezons.push(new U_quark(
                        {
                                x: quarks[i].coordinates.x + Math.random() * 100 - 50,
                                y: quarks[i].coordinates.y + Math.random() * 100 - 50
                            },
                            quarks[i].colorQuark,
                            10,
                            speedX,
                            speedY
                    ))
                    mezons.push(new Anti_U_quark(
                        {
                                x: quarks[i].coordinates.x + Math.random() * 100 - 50,
                                y: quarks[i].coordinates.y + Math.random() * 100 - 50
                            },
                            quarks[i].anticolorQuark,
                            10,
                            speedX,
                            speedY
                    ))
                }
            }
        }
    }

    for (let i = 0; i < mezons.length; i++) {
        mezons[i].move()
    }

    returnQuarksOnPlace(quarks)
    movingGluonField(gluonField, mezons, quarks)
    interactionWeakForse(quarks, bozons)
    replacingQuarks(quarks, bozons)
    createVirtualQuarks(quarks, virtualParticle)
    deleteMezons()
}