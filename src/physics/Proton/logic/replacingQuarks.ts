import { Quark, Bozon } from "./parts"
import { Z_bozon } from "../particle/Bozons"

export const replacingQuarks = (quarks: Quark[], bozons: Bozon[]) => {
    if (Math.random() < 0.1) {
            const randomIndex = Math.floor(quarks.length * Math.random())
            let randomIndexTwo = Math.floor(quarks.length * Math.random())
    
            while (randomIndexTwo === randomIndex) {
                randomIndexTwo = Math.floor(quarks.length * Math.random())
            }
    
            if (quarks[randomIndex].colorQuark !== quarks[randomIndexTwo].colorQuark && Math.sqrt(Math.pow((quarks[randomIndex].coordinates.x - quarks[randomIndexTwo].coordinates.x), 2) + Math.pow((quarks[randomIndex].coordinates.y - quarks[randomIndexTwo].coordinates.y), 2)) < 350) {
                const firstPointColor = quarks[randomIndex].colorQuark
                const secondPointColor = quarks[randomIndexTwo].colorQuark
    
                quarks[randomIndex].setColor(secondPointColor)
                quarks[randomIndexTwo].setColor(firstPointColor)
            }
    
            bozons.push(new Z_bozon(
                {
                    x: (quarks[randomIndex].coordinates.x - quarks[randomIndexTwo].coordinates.x) * Math.random() + quarks[randomIndexTwo].coordinates.x,
                    y: (quarks[randomIndex].coordinates.y - quarks[randomIndexTwo].coordinates.y) * Math.random() + quarks[randomIndexTwo].coordinates.y
                },
                "red"
            ))
        }
}