import { parts } from "./parts";
import { gravityRoche } from "./gravityRoche";
const drawPoint = (context, point) => {
    context.fillStyle = `${point.color}`;
    context.beginPath();
    context.arc(point.x, point.y, point.size, 0, 2 * Math.PI);
    context.fill();
};
export const renderElement = (ctx, isWork) => {
    if (ctx) {
        for (let i = 0; i < parts.length; i++) {
            drawPoint(ctx, parts[i]);
        }
    }
    if (isWork) {
        gravityRoche(parts);
    }
};
//# sourceMappingURL=renderElement.js.map