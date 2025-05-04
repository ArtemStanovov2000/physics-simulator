import { colors } from "./colors";
export const partsForTidalForses = [];
const COUNT_PARTH = 300;
const width = 960;
const height = 500;
const size = 300;
export const createParthForGravity = () => {
    for (let i = 0; partsForTidalForses.length < COUNT_PARTH; i++) {
        const distanceX = (Math.random() - 0.5) * size;
        const distanceY = (Math.random() - 0.5) * size;
        if ((Math.pow(distanceX, 2) + Math.pow(distanceY, 2)) < Math.pow(size / 2, 2)) {
            partsForTidalForses.push({
                x: Math.floor(width / 3) + distanceX,
                y: (height / 2) + distanceY,
                speedX: 0,
                speedY: 0,
                mass: 0.02,
                size: Math.sqrt(4),
                color: colors()
            });
        }
    }
    partsForTidalForses[0] = {
        x: Math.floor(width / 2) + 200,
        y: Math.floor(height / 2),
        speedX: 0,
        speedY: 0,
        mass: 100,
        size: Math.sqrt(300),
        color: colors()
    };
};
//# sourceMappingURL=partsForTidalForses.js.map