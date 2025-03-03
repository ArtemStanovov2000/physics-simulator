import { Quark, Bozon } from "./parts"
import { Z_bozon } from "../particle/Bozons"

export const interaction = (bozons: Bozon[], quarks: Quark[]) => {
    for (let i = 0; i < quarks.length; i++) {
        const bosonRadiation = Math.random() < 0.02
        if (bosonRadiation) {
            bozons.push(new Z_bozon(
                {
                    x: quarks[i].coordinates.x,
                    y: quarks[i].coordinates.y
                },
                Math.random() * 6 - 3,
                Math.random() * 6 - 3,
            ))
        }
    }

    for (let i = 0; i < bozons.length; i++) {
        bozons[i].move()
    }
}