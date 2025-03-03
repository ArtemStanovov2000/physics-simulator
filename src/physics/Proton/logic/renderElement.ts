import { quarks, Quark, bozons, Bozon } from "./parts";
import { interaction } from "./interaction";

const drawQuark = (context: CanvasRenderingContext2D, point: Quark) => {
    context.fillStyle = `${point.getColor()}`;
    context.beginPath();
    context.arc(point.coordinates.x, point.coordinates.y, point.size, 0, 2 * Math.PI);
    context.fill();

    context.font = `${point.textSize}px Verdana`;
    context.fillStyle = `${"#ffffff"}`;
    context.fillText(`${point.name}`, point.coordinates.x - point.textOffsetX, point.coordinates.y + point.textOffsetY);
}

const drawBozon = (context: CanvasRenderingContext2D, point: Bozon) => {
    context.fillStyle = `${point.color}`;
    context.beginPath();
    context.arc(point.coordinates.x, point.coordinates.y, point.size, 0, 2 * Math.PI);
    context.fill();

    context.font = `${point.textSize}px Verdana`;
    context.fillStyle = `${"#ffffff"}`;
    context.fillText(`${point.name}`, point.coordinates.x - point.textOffsetX, point.coordinates.y + point.textOffsetY);
}

export const renderElement = (ctx: CanvasRenderingContext2D | null | undefined, isWork: boolean) => {
    if (ctx) {
        for (let i = 0; i < bozons.length; i++) {
            drawBozon(ctx, bozons[i])
        }

        for (let i = 0; i < quarks.length; i++) {
            drawQuark(ctx, quarks[i])
        }
    }

    console.log(bozons)

    if (isWork) {
        interaction(bozons, quarks)
    }
}