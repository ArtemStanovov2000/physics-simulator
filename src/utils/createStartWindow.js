export const createStartWindow = (ctx, width, height, color = "#171720") => {
    if (ctx) {
        ctx.fillStyle = color;
        ctx.fillRect(0, 0, width, height);
        ctx.stroke();
    }
};
//# sourceMappingURL=createStartWindow.js.map