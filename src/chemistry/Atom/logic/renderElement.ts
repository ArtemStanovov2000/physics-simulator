import { cursor, CursorElement } from "../../../shared/cursor/cursor";
import { playgroundPageCoordinates } from "../coordinates";
import { fermions, electrons } from "./parts";
import { Proton, Neutron, Electron } from "../../elements/element";
import { createElectronOrbital } from "./createElectronOrbital";
import { createFermions } from "./createFermions";

const drawParticle = (context: CanvasRenderingContext2D, point:  Neutron | Proton | Electron) => {
    context.fillStyle = `${point.color}`;
    context.beginPath();
    context.arc(point.coordinates.x, point.coordinates.y, point.size, 0, 2 * Math.PI);
    context.fill();
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
        for (let i = electrons.length; i > 0; i--) {
            electrons.pop()
        }

        for (let i = fermions.length; i > 0; i--) {
            fermions.pop()
        }

        createElectronOrbital(35, 2, electrons)
        createElectronOrbital(67, 8, electrons)
        createElectronOrbital(151, 18, electrons)
        createElectronOrbital(269, 8, electrons)
        createFermions(26, 30, fermions)

        for (let i = 0; i < fermions.length; i++) {
            drawParticle(ctx, fermions[i])
        }

        for (let i = 0; i < electrons.length; i++) {
            drawParticle(ctx, electrons[i])
        }

        for (let i = 0; i < cursor.length; i++) {
            drawCursor(ctx, cursor[i], playgroundPageCoordinates.getCoordinates())
        }
    }

    if (isWork) {
    }
}