export const createDottedCircle = (ctx: CanvasRenderingContext2D | null | undefined, radius: number) => {
    const LENGTH_ARC = 12
    const LENGTH_SPACE = 12
    const sumLength = LENGTH_ARC + LENGTH_SPACE
    const countArc = Math.floor(radius * 2 * Math.PI / sumLength)

    const dottedArray = []
    for (let i = 0; i < countArc; i++) {
        dottedArray.push({
            angleStart: (2 * Math.PI / countArc) * i,
            angleEnd: (2 * Math.PI / countArc) * (i + (LENGTH_ARC / sumLength))
        })
    }
    
    console.log(dottedArray)

    if (ctx) {
        for (let i = 0; i < dottedArray.length; i++) {
            ctx.beginPath();
            ctx.arc(window.innerWidth / 2, window.innerHeight / 2, radius, dottedArray[i].angleEnd, dottedArray[i].angleStart, true);
            ctx.strokeStyle = "#999999";
            ctx.stroke();
        }
    }
}