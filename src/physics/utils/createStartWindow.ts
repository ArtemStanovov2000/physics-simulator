export const createStartWindow = (ctx: CanvasRenderingContext2D | null | undefined, width: number, height: number, color = "#171720") => {
    if (ctx) {
        ctx.fillStyle = color;
        ctx.fillRect(0, 0, width, height);
        ctx.stroke();
    }
}