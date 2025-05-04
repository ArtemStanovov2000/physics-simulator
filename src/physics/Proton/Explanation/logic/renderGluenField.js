import { gluonFieldParticleExplanation } from "./parts";
import { movingGluonFieldExplanation } from "./movingGluonFieldExplanation";
const drawGluonFieldParticle = (context, point) => {
    context.fillStyle = `${point.color}`;
    context.beginPath();
    context.arc(point.coordinates.x, point.coordinates.y, point.size, 0, 2 * Math.PI);
    context.fill();
    context.fillStyle = `${point.color}`;
};
export const renderGluenField = (ctx) => {
    if (ctx) {
        for (let i = 0; i < gluonFieldParticleExplanation.length; i++) {
            drawGluonFieldParticle(ctx, gluonFieldParticleExplanation[i]);
        }
        movingGluonFieldExplanation(gluonFieldParticleExplanation);
    }
};
//# sourceMappingURL=renderGluenField.js.map