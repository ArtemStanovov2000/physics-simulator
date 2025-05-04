import { gravity } from "./gravity";
import { tidesParts, planets } from "./parts";
import { moonMove } from "./moonMove";
const drawParticle = (context, point) => {
    context.fillStyle = `${point.color}`;
    context.beginPath();
    context.arc(point.x, point.y, point.size, 0, 2 * Math.PI);
    context.fill();
};
export const renderElement = (ctx, isWork, frameIndex) => {
    if (ctx) {
        for (let i = 0; i < tidesParts.length; i++) {
            drawParticle(ctx, tidesParts[i]);
        }
        for (let i = 0; i < planets.length; i++) {
            drawParticle(ctx, planets[i]);
        }
    }
    if (isWork) {
        gravity(tidesParts, planets);
        moonMove(planets[1], frameIndex);
    }
};
//# sourceMappingURL=renderElement.js.map