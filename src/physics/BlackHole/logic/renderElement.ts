import { cursor, CursorElement } from "../../../shared/cursor/cursor";
import { blackHolePageCoordinates } from "../coordinates";
import { blackHole, BlackHole, grid, Grid, particle } from "./parts";
import { gravity, gravityElements } from "./gravity";
import { deleteGrid } from "./deleteGrid";
import { addGrid } from "./addGrid";
import { elements } from "./parts";

const drawParticle = (context: CanvasRenderingContext2D, point: Grid) => {
    context.fillStyle = `${point.color}`;
    context.beginPath();
    context.arc(point.coordinates.x, point.coordinates.y, point.size, 0, 2 * Math.PI);
    context.fill();
}

const drawBlackHole = (context: CanvasRenderingContext2D, point: BlackHole) => {
    context.fillStyle = `${point.color}`;
    context.beginPath();
    context.arc(point.coordinates.x, point.coordinates.y, point.size, 0, 2 * Math.PI);
    context.fill();
}

const drawCursor = (context: CanvasRenderingContext2D, element: CursorElement, cursorCoord: { xCoordinates: number, yCoordinates: number }) => {
    context.beginPath()
    context.moveTo(element.xStart + cursorCoord.xCoordinates, element.yStart + cursorCoord.yCoordinates)
    context.lineTo(element.xEnd + cursorCoord.xCoordinates, element.yEnd + cursorCoord.yCoordinates)
    context.strokeStyle = `#ffffff`
    context.lineWidth = 3
    context.stroke()
}

export const renderElement = (ctx: CanvasRenderingContext2D | null | undefined, isWork: boolean, frameIndex: number) => {
    if (ctx) {
        for (let i = 0; i < grid.length; i++) {
            drawParticle(ctx, grid[i])
        }

        for (let i = 0; i < elements.length; i++) {
            elements[i].renderElement(ctx)
        }

        for (let i = 0; i < particle.length; i++) {
            drawParticle(ctx, particle[i])
        }

        drawBlackHole(ctx, blackHole)

        for (let i = 0; i < cursor.length; i++) {
            drawCursor(ctx, cursor[i], blackHolePageCoordinates.getCoordinates())
        }

    }
    
    if (isWork) {
        gravity(grid, blackHole)
        gravity(particle, blackHole)
        gravityElements(elements, blackHole)
        deleteGrid(grid, blackHole)
        deleteGrid(elements, blackHole)
        addGrid(grid, frameIndex, window.innerWidth / 1.7)
    }
}