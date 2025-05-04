import { parts } from "./parts";
import { life } from "./life";
const drawParticle = (context, point) => {
    context.fillStyle = `${point.color}`;
    context.beginPath();
    context.arc(point.x, point.y, point.size, 0, 2 * Math.PI);
    context.fill();
};
export const renderElement = (ctx, isWork) => {
    if (ctx) {
        for (let i = 0; i < parts.length; i++) {
            drawParticle(ctx, parts[i]);
        }
    }
    if (isWork) {
        life(parts);
    }
};
//# sourceMappingURL=renderElement.js.map