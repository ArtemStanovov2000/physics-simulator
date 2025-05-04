export class Coordinates {
    coordinates;
    constructor() {
        this.coordinates = {
            xCoordinates: 0,
            yCoordinates: 0
        };
    }
    setCoordinates(x, y) {
        this.coordinates = {
            xCoordinates: x,
            yCoordinates: y
        };
    }
    getCoordinates() {
        return this.coordinates;
    }
}
//# sourceMappingURL=coordinates.js.map