import { Quark, AllQuarks } from "./parts"
import { Anti_U_quark } from "../particle/AntiQuarks"
import { U_quark } from "../particle/Quarks"

const OFFSET_VIRTUAL_PARTICLE = 100
const RANDOM_OFFSET = 200

export const createVirtualQuarks = (quarks: Quark[], virtualParticle: AllQuarks[]) => {
    if (Math.random() < 0.1) {
            const randonQuark = Math.floor(Math.random() * quarks.length)
            const color: Array<"red" | "blue" | "green"> = ["red", "blue", "green"]
            const anticolor: Array<"antired" | "antiblue" | "antigreen"> = ["antired", "antiblue", "antigreen"]
            const randonColor = Math.floor(Math.random() * color.length)
            const randomOffsetX = Math.random() * RANDOM_OFFSET - RANDOM_OFFSET / 2
            const randomOffsetY = Math.random() * RANDOM_OFFSET - RANDOM_OFFSET / 2
    
            virtualParticle.push(new Anti_U_quark(
                {
                    x: quarks[randonQuark].coordinates.x + randomOffsetX + Math.random() * OFFSET_VIRTUAL_PARTICLE - OFFSET_VIRTUAL_PARTICLE / 2,
                    y: quarks[randonQuark].coordinates.y + randomOffsetY + Math.random() * OFFSET_VIRTUAL_PARTICLE - OFFSET_VIRTUAL_PARTICLE / 2
                },
                anticolor[randonColor],
                0
            ))
            virtualParticle.push(new U_quark(
                {
                    x: quarks[randonQuark].coordinates.x + randomOffsetX + Math.random() * OFFSET_VIRTUAL_PARTICLE - OFFSET_VIRTUAL_PARTICLE / 2,
                    y: quarks[randonQuark].coordinates.y + randomOffsetY + Math.random() * OFFSET_VIRTUAL_PARTICLE - OFFSET_VIRTUAL_PARTICLE / 2
                },
                color[randonColor],
                40000
            ))
        }
}