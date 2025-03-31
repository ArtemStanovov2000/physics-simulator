import { gravity } from "./gravity";
import { tidesParts, ParticleWater, planets, ParticlePlanets } from "./parts";
import { moonMove } from "./moonMove";

const drawParticle = (context: CanvasRenderingContext2D, point: ParticleWater | ParticlePlanets) => {
    context.fillStyle = `${point.color}`;
    context.beginPath();
    context.arc(point.x, point.y, point.size, 0, 2 * Math.PI);
    context.fill();
}

export const renderElement = (ctx: CanvasRenderingContext2D | null | undefined, isWork: boolean, frameIndex: number) => {
    if (ctx) {
        for (let i = 0; i < tidesParts.length; i++) {
            drawParticle(ctx, tidesParts[i])
        }

        for (let i = 0; i < planets.length; i++) {
            drawParticle(ctx, planets[i])
        }
    }

    if (isWork) {
        gravity(tidesParts, planets)
        moonMove(planets[1], frameIndex)
    }
}