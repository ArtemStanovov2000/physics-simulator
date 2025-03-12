import { gluonFieldParticleExplanation } from "./parts";
import { GluonField } from "../../particle/GluonField";
import { movingGluonFieldExplanation } from "./movingGluonFieldExplanation";

const drawGluonFieldParticle = (context: CanvasRenderingContext2D, point: GluonField) => {
    context.fillStyle = `${point.color}`;
    context.beginPath();
    context.arc(point.coordinates.x, point.coordinates.y, point.size, 0, 2 * Math.PI);
    context.fill();
    context.fillStyle = `${point.color}`;
}

export const renderGluenField = (ctx: CanvasRenderingContext2D | null | undefined) => {
    if (ctx) {
        for (let i = 0; i < gluonFieldParticleExplanation.length; i++) {
            drawGluonFieldParticle(ctx, gluonFieldParticleExplanation[i])
        }
        movingGluonFieldExplanation(gluonFieldParticleExplanation)
    }
}