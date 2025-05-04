import { Anti_U_quark } from "../particle/AntiQuarks";
import { U_quark } from "../particle/Quarks";
const OFFSET_VIRTUAL_PARTICLE = 100;
const RANDOM_OFFSET = 200;
export const createVirtualQuarks = (quarks, virtualParticle) => {
    if (Math.random() < 0.2) {
        const randonQuark = Math.floor(Math.random() * quarks.length);
        const color = ["red", "blue", "green"];
        const anticolor = ["antired", "antiblue", "antigreen"];
        const randonColor = Math.floor(Math.random() * color.length);
        const randomOffsetX = Math.random() * RANDOM_OFFSET - RANDOM_OFFSET / 2;
        const randomOffsetY = Math.random() * RANDOM_OFFSET - RANDOM_OFFSET / 2;
        virtualParticle.push(new Anti_U_quark({
            x: quarks[randonQuark].coordinates.x + randomOffsetX + Math.random() * OFFSET_VIRTUAL_PARTICLE - OFFSET_VIRTUAL_PARTICLE / 2,
            y: quarks[randonQuark].coordinates.y + randomOffsetY + Math.random() * OFFSET_VIRTUAL_PARTICLE - OFFSET_VIRTUAL_PARTICLE / 2
        }, anticolor[randonColor], 0));
        virtualParticle.push(new U_quark({
            x: quarks[randonQuark].coordinates.x + randomOffsetX + Math.random() * OFFSET_VIRTUAL_PARTICLE - OFFSET_VIRTUAL_PARTICLE / 2,
            y: quarks[randonQuark].coordinates.y + randomOffsetY + Math.random() * OFFSET_VIRTUAL_PARTICLE - OFFSET_VIRTUAL_PARTICLE / 2
        }, color[randonColor], 40000));
    }
};
//# sourceMappingURL=createVirtualQuarks.js.map