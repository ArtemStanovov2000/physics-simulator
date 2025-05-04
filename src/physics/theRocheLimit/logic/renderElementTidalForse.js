import { gravityRoche } from "./gravityRoche";
import { partsForTidalForses, createParthForGravity } from "./partsForTidalForses";
const drawPoint = (context, point) => {
    context.fillStyle = `${point.color}`;
    context.beginPath();
    context.arc(point.x, point.y, point.size, 0, 2 * Math.PI);
    context.fill();
};
export const renderElementTidalForse = (ctx, frameIndex, repeatCount) => {
    if (ctx) {
        for (let i = 0; i < partsForTidalForses.length; i++) {
            drawPoint(ctx, partsForTidalForses[i]);
        }
    }
    gravityRoche(partsForTidalForses);
    if (frameIndex % repeatCount === 0) {
        for (let i = partsForTidalForses.length; i > 0; i--) {
            partsForTidalForses.pop();
        }
        createParthForGravity();
    }
};
//# sourceMappingURL=renderElementTidalForse.js.map