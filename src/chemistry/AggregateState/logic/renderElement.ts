import { Particle, parts } from "./parts";
import { gravity } from "./gravity";

const drawPoint = (context: CanvasRenderingContext2D, point: Particle) => {
    context.fillStyle = `${point.color}`;
    context.beginPath();
    context.arc(point.x, point.y, point.size, 0, 2 * Math.PI);
    context.fill();
}

export const renderElement = (ctx: CanvasRenderingContext2D | null | undefined) => {
    if (ctx) {
        for (let i = 0; i < parts.length; i++) {
            drawPoint(ctx, parts[i])
        }
    }

    gravity(parts)
}