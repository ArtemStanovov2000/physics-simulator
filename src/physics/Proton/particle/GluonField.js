export class GluonField {
    speedX;
    speedY;
    size;
    color;
    coordinates;
    constructor(coordinates) {
        this.speedX = 0;
        this.speedY = 0;
        this.size = 2;
        this.color = "";
        this.coordinates = coordinates;
    }
    move() {
        this.coordinates = {
            x: this.coordinates.x + this.speedX,
            y: this.coordinates.y + this.speedY
        };
    }
    setColor(color) {
        this.color = color;
    }
}
//# sourceMappingURL=GluonField.js.map