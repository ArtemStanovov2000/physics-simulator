import { gravity } from "./gravity";
import { Particle } from "./parts";
import { partsForGravity, createParthForGravity } from "./partsForGravity";

const drawPoint = (context: CanvasRenderingContext2D, point: Particle) => {
    context.fillStyle = `${point.color}`;
    context.beginPath();
    context.arc(point.x, point.y, point.size, 0, 2 * Math.PI);
    context.fill();
}

export const renderElementGravity = (ctx: CanvasRenderingContext2D | null | undefined, frameIndex: number, repeatCount: number) => {
    if (ctx) {
        for (let i = 0; i < partsForGravity.length; i++) {
            drawPoint(ctx, partsForGravity[i])
        }
    }

    gravity(partsForGravity)

    if (frameIndex % repeatCount === 0) {
        for (let i = partsForGravity.length; i > 0; i--) {
            partsForGravity.pop()
        }
        createParthForGravity()
    }
}