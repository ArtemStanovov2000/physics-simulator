import { quarks, Quark, bozons, Bozon, gluonFieldParticle } from "./parts";
import { GluonField } from "../particle/GluonField";
import { interaction } from "./interaction";

const drawParticle = (context: CanvasRenderingContext2D, point: Quark | Bozon) => {
    context.fillStyle = `${point.color}`;
    context.beginPath();
    context.arc(point.coordinates.x, point.coordinates.y, point.size, 0, 2 * Math.PI);
    context.fill();

    context.font = `${point.textSize}px Verdana`;
    context.fillStyle = `${"#ffffff"}`;
    context.fillText(`${point.name}`, point.coordinates.x - point.textOffsetX, point.coordinates.y + point.textOffsetY);
}

const drawGluonFieldParticle = (context: CanvasRenderingContext2D, point: GluonField) => {
    context.fillStyle = `${point.color}`;
    context.beginPath();
    context.arc(point.coordinates.x, point.coordinates.y, point.size, 0, 2 * Math.PI);
    context.fill();

    context.fillStyle = `${point.color}`;
}

export const renderElement = (ctx: CanvasRenderingContext2D | null | undefined, isWork: boolean) => {
    if (ctx) {
        for (let i = 0; i < gluonFieldParticle.length; i++) {
            drawGluonFieldParticle(ctx, gluonFieldParticle[i])
        }

        for (let i = 0; i < quarks.length; i++) {
            drawParticle(ctx, quarks[i])
        }

        for (let i = 0; i < quarks.length; i++) {
            drawParticle(ctx, quarks[i])
        }
    }

    if (isWork) {
        interaction(bozons, quarks, gluonFieldParticle)
    }
}