export const gravityRoche = (array) => {
    for (let i = 0; i < array.length; i++) {
        let deltaX = 0;
        let deltaY = 0;
        for (let j = 0; j < array.length; j++) {
            const distanse = Math.sqrt(Math.pow((array[i].x - array[j].x), 2) + Math.pow((array[i].y - array[j].y), 2));
            if (distanse === 0) {
                deltaX += 0;
                deltaY += 0;
            }
            else if (distanse < (array[i].size + array[j].size)) {
                deltaX -= ((array[i].x - array[j].x) * Math.pow((1 / distanse), 2)) / 200 * array[j].mass;
                deltaY -= ((array[i].y - array[j].y) * Math.pow((1 / distanse), 2)) / 200 * array[j].mass;
            }
            else {
                deltaX += ((array[i].x - array[j].x) * Math.pow((1 / distanse), 2)) / 200 * array[j].mass;
                deltaY += ((array[i].y - array[j].y) * Math.pow((1 / distanse), 2)) / 200 * array[j].mass;
            }
        }
        if (i !== 0) {
            array[i].speedX = array[i].speedX - deltaX;
            array[i].speedY = array[i].speedY - deltaY;
            array[i].speedX = array[i].speedX * 0.9993;
            array[i].speedY = array[i].speedY * 0.9993;
            array[i].x += array[i].speedX;
            array[i].y += array[i].speedY;
        }
    }
};
//# sourceMappingURL=gravityRoche.js.map