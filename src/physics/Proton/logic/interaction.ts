import { Quark, Bozon } from "./parts"
import { Z_bozon } from "../particle/Bozons"

export const interaction = (bozons: Bozon[], quarks: Quark[]) => {
    for (let i = 0; i < quarks.length; i++) {
        const bosonRadiation = Math.random() < 0.05
        if (bosonRadiation) {
            bozons.push(new Z_bozon(
                {
                    x: quarks[i].coordinates.x,
                    y: quarks[i].coordinates.y
                },
                0,
                0,
                quarks[i].colorQuark,
                quarks[i].id
            ))
            quarks[i].changeColor()
        }
    }

    for (let i = 0; i < bozons.length; i++) {
        bozons[i].move()
        const X = bozons[i].coordinates.x
        const Y = bozons[i].coordinates.y

        if (bozons[i].quarkTargetId === bozons[i].id) {
            bozons[i].setQuarkTargetId(quarks.length)
        }

        if (Y > window.innerHeight || Y < 0 || X < 0 || X > window.innerWidth) {
            bozons.splice(i, 1)
        }


        let deltaX = 0
        let deltaY = 0
        for (let j = 0; j < quarks.length; j++) {
            const distanse = Math.sqrt(Math.pow((bozons[i].coordinates.x - quarks[j].coordinates.x), 2) + Math.pow((bozons[i].coordinates.y - quarks[j].coordinates.y), 2))
            if (distanse === 0 || quarks[j].id === bozons[i].id) {
                deltaX += 0
                deltaY += 0
            } else if (quarks[j].id === bozons[i].quarkTargetId) {
                deltaX += ((bozons[i].coordinates.x - quarks[j].coordinates.x) / 200)
                deltaY += ((bozons[i].coordinates.y - quarks[j].coordinates.y) / 200)
            }
        }

        bozons[i].speedX = bozons[i].speedX - deltaX
        bozons[i].speedY = bozons[i].speedY - deltaY
        bozons[i].coordinates.x += bozons[i].speedX
        bozons[i].coordinates.y += bozons[i].speedY
    }

    for (let i = 0; i < bozons.length; i++) {
        for (let j = 0; j < quarks.length; j++) {
            if (bozons[i] && quarks[j]) {
                let distanse = 0
                distanse = Math.sqrt(Math.pow((bozons[i].coordinates.x - quarks[j].coordinates.x), 2) + Math.pow((bozons[i].coordinates.y - quarks[j].coordinates.y), 2))
                if (quarks[j].id === bozons[i].quarkTargetId) {
                    if (distanse < 40) {
                        quarks[j].setColor(bozons[i].getColorBozon())
                        bozons.splice(i, 1)
                    }
                }
            }
        }
    }

    console.log(bozons)
}