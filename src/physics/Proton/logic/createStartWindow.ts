export const createStartWindow = (ctx: any, width: number, height: number) => {
    ctx.fillStyle = "#171720";
    ctx.fillRect(0, 0, width, height);
    ctx.stroke();
}