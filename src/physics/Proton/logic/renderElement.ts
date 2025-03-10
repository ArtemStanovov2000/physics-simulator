import { quarks, Quark, bozons, Bozon, gluonFieldParticle, virtualParticle, AllQuarks, mezons } from "./parts";
import { GluonField } from "../particle/GluonField";
import { interaction } from "./interaction";
import { protonPageCoordinates } from "../coordinates";
import { cursor, CursorElement } from "../cursor";

const drawParticle = (context: CanvasRenderingContext2D, point: Quark | Bozon | AllQuarks) => {
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

const drawCursor = (context: CanvasRenderingContext2D, element: CursorElement, cursorCoord: {xCoordinates: number, yCoordinates: number}) => {
    context.beginPath()
    context.moveTo(element.xStart + cursorCoord.xCoordinates, element.yStart + cursorCoord.yCoordinates)
    context.lineTo(element.xEnd + cursorCoord.xCoordinates, element.yEnd + cursorCoord.yCoordinates)
    context.strokeStyle = `#ffffff`
    context.lineWidth = 3
    context.stroke()
}

export const renderElement = (ctx: CanvasRenderingContext2D | null | undefined, isWork: boolean, mouseDoun: boolean) => {
    if (ctx) {
        for (let i = 0; i < gluonFieldParticle.length; i++) {
            drawGluonFieldParticle(ctx, gluonFieldParticle[i])
        }

        for (let i = 0; i < quarks.length; i++) {
            drawParticle(ctx, quarks[i])
        }

        for (let i = 0; i < bozons.length; i++) {
            drawParticle(ctx, bozons[i])
        }

        for (let i = 0; i < virtualParticle.length; i++) {
            drawParticle(ctx, virtualParticle[i])
        }

        for (let i = 0; i < virtualParticle.length; i++) {
            drawParticle(ctx, virtualParticle[i])
        }

        for (let i = 0; i < mezons.length; i++) {
            drawParticle(ctx, mezons[i])
        }

        for (let i = 0; i < cursor.length; i++) {
            drawCursor(ctx, cursor[i], protonPageCoordinates.getCoordinates())
        }
    }

    if (isWork) {
        interaction(virtualParticle, bozons, quarks, gluonFieldParticle, mouseDoun)
    }
}