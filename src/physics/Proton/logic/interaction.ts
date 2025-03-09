import { Quark, Bozon, VirtualParticle } from "./parts"
import { GluonField } from "../particle/GluonField"
import { Z_bozon } from "../particle/Bozons"
import { Anti_U_quark} from "../particle/AntiQuarks"
import { U_quark } from "../particle/Quarks"
import { protonPageCoordinates } from "../coordinates"

export const interaction = (virtualParticle: VirtualParticle[], bozons: Bozon[], quarks: Quark[], gluonField: GluonField[], mouseDoun: boolean) => {
    for (let i = bozons.length; i > 0; i--) {
        bozons.pop()
    }

    for (let i = virtualParticle.length; i > 0; i--) {
        virtualParticle.pop()
    }

    if(mouseDoun === true) {
        const coordX = protonPageCoordinates.getCoordinates().xCoordinates
        const coordY = protonPageCoordinates.getCoordinates().yCoordinates
        for (let i = 0; i < quarks.length; i++) {
            if(Math.sqrt(Math.pow(coordX - quarks[i].coordinates.x, 2) + Math.pow(coordY - quarks[i].coordinates.y, 2)) < quarks[i].size) {
                console.log(i)
            }
        }
    }

    for (let i = 0; i < gluonField.length; i++) {
        gluonField[i].speedX = (Math.random() * 40 - 20)
        gluonField[i].speedY = (Math.random() * 40 - 20)
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

        for (let j = 0; j < quarks.length; j++) {
            const distanse = Math.sqrt(Math.pow(gluonField[i].coordinates.x - quarks[j].coordinates.x, 2) + Math.pow(gluonField[i].coordinates.y - quarks[j].coordinates.y, 2))
            if (distanse < 200) {
                gluonField[i].speedX = (Math.random() * 40 - 20) * Math.pow(distanse / 200, 2)
                gluonField[i].speedY = (Math.random() * 40 - 20) * Math.pow(distanse / 200, 2)
                gluonField[i].setColor(`rgba(65, 65, 65, ${Math.pow(distanse / 200, 1.5) - 0.3})`)
                if (Math.random() < 0.003) {
                    gluonField[i].coordinates.y = window.innerWidth * Math.random()
                    gluonField[i].coordinates.y = window.innerHeight * Math.random()
                }
            }
        }

        gluonField[i].move()
    }

    if (Math.random() < 0.1) {
        const randomIndex = Math.floor(quarks.length * Math.random())
        let randomIndexTwo = Math.floor(quarks.length * Math.random())

        while (randomIndexTwo === randomIndex) {
            randomIndexTwo = Math.floor(quarks.length * Math.random())
        }

        if (quarks[randomIndex].colorQuark !== quarks[randomIndexTwo].colorQuark && Math.sqrt(Math.pow((quarks[randomIndex].coordinates.x - quarks[randomIndexTwo].coordinates.x), 2) + Math.pow((quarks[randomIndex].coordinates.y - quarks[randomIndexTwo].coordinates.y), 2)) < 350) {
            const firstPointCoordinates = quarks[randomIndex].coordinates
            const secondPointCoordinates = quarks[randomIndexTwo].coordinates

            quarks[randomIndex].coordinates = secondPointCoordinates
            quarks[randomIndexTwo].coordinates = firstPointCoordinates
        }

        bozons.push(new Z_bozon(
            {
                x: (quarks[randomIndex].coordinates.x - quarks[randomIndexTwo].coordinates.x) * Math.random() + quarks[randomIndexTwo].coordinates.x,
                y: (quarks[randomIndex].coordinates.y - quarks[randomIndexTwo].coordinates.y) * Math.random() + quarks[randomIndexTwo].coordinates.y
            },
            "red"
        ))
    }

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

    if (Math.random() < 0.1) {
        const randonQuark = Math.floor(Math.random() * quarks.length)
        const color: Array<"red" | "blue" | "green"> = ["red", "blue", "green"]
        const anticolor: Array<"antired" | "antiblue" | "antigreen"> = ["antired", "antiblue", "antigreen"]
        const randonColor = Math.floor(Math.random() * color.length)
        const randomOffsetX = Math.random() * 200 - 100
        const randomOffsetY = Math.random() * 200 - 100

        virtualParticle.push(new Anti_U_quark(
            {
                x: quarks[randonQuark].coordinates.x + randomOffsetX + Math.random() * 100 - 50,
                y: quarks[randonQuark].coordinates.y + randomOffsetY + Math.random() * 100 - 50
            },
            anticolor[randonColor]
        ))
        virtualParticle.push(new U_quark(
            {
                x: quarks[randonQuark].coordinates.x + randomOffsetX + Math.random() * 100 - 50,
                y: quarks[randonQuark].coordinates.y + randomOffsetY + Math.random() * 100 - 50
            },
            color[randonColor],
        ))
    }
}