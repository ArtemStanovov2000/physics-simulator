export const createDottedCircle = (ctx: CanvasRenderingContext2D | null | undefined, radius: number) => {
    if (ctx) {
        ctx.beginPath();
        ctx.arc(window.innerWidth / 2, window.innerHeight / 2, radius, 6.2, 0, true);
        ctx.strokeStyle = "#999999";
        ctx.stroke();
    }
}