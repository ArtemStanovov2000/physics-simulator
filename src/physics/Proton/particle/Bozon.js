export class Bozon {
    spin;
    group;
    family;
    size;
    textOffsetX;
    textOffsetY;
    textSize;
    colorBozon;
    coordinates;
    constructor(coordinates, textOffsetX, textOffsetY, colorBozon) {
        this.spin = 1;
        this.group = "bozon";
        this.family = "calibrationBoson";
        this.size = 20;
        this.textSize = 20;
        this.colorBozon = colorBozon;
        this.coordinates = coordinates;
        this.textOffsetX = textOffsetX;
        this.textOffsetY = textOffsetY;
    }
    getColorBozon() {
        return this.colorBozon;
    }
}
//# sourceMappingURL=Bozon.js.map