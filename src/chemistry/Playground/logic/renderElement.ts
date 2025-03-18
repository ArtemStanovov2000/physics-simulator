import { cursor, CursorElement } from "../../../shared/cursor/cursor";
import { playgroundPageCoordinates } from "../coordinates";
import { particles } from "./parts";
import { ChemicalElement } from "../../elements/element";

const drawParticle = (context: CanvasRenderingContext2D, point: ChemicalElement) => {
    context.fillStyle = `${point.color}`;
    context.beginPath();
    context.arc(point.coordinates.x, point.coordinates.y, point.size, 0, 2 * Math.PI);
    context.fill();

    context.font = `${point.label.size}px Verdana`;
    context.fillStyle = `${"#ffffff"}`;
    context.fillText(`${point.label.label}`, point.coordinates.x - point.label.offsetX, point.coordinates.y + point.label.offsetY);
}

const drawCursor = (context: CanvasRenderingContext2D, element: CursorElement, cursorCoord: {xCoordinates: number, yCoordinates: number}) => {
    context.beginPath()
    context.moveTo(element.xStart + cursorCoord.xCoordinates, element.yStart + cursorCoord.yCoordinates)
    context.lineTo(element.xEnd + cursorCoord.xCoordinates, element.yEnd + cursorCoord.yCoordinates)
    context.strokeStyle = `#ffffff`
    context.lineWidth = 3
    context.stroke()
}

export const renderElement = (ctx: CanvasRenderingContext2D | null | undefined, isWork: boolean) => {
    if (ctx) {
        for (let i = 0; i < particles.length; i++) {
            drawParticle(ctx, particles[i])
        }

        for (let i = 0; i < cursor.length; i++) {
            drawCursor(ctx, cursor[i], playgroundPageCoordinates.getCoordinates())
        }
    }

    if (isWork) {
        //interaction()
    }
}