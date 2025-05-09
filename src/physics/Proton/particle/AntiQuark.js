export class AntiQuark {
    speedX;
    speedY;
    spin;
    group;
    family;
    size;
    id;
    textSize;
    color;
    colorQuark;
    textOffsetX;
    textOffsetY;
    coordinates;
    constructor(coordinates, textOffsetX, textOffsetY, colorQuark, id, speedX, speedY) {
        this.speedX = speedX || 0;
        this.speedY = speedY || 0;
        this.spin = 0.5;
        this.group = "antiquark";
        this.family = "fermion";
        this.size = 30;
        this.id = id;
        this.textSize = 35;
        this.color = "";
        this.colorQuark = colorQuark;
        this.textOffsetX = textOffsetX;
        this.textOffsetY = textOffsetY;
        this.coordinates = coordinates;
        if (this.colorQuark === "antired") {
            this.color = "#40d5d5";
        }
        else if (this.colorQuark === "antigreen") {
            this.color = "#d540d5";
        }
        else if (this.colorQuark === "antiblue") {
            this.color = "#d5d540";
        }
    }
    setSpeed(speedY, speedX) {
        this.speedY = speedY;
        this.speedX = speedX;
    }
    move() {
        this.coordinates.x += this.speedX;
        this.coordinates.y += this.speedY;
    }
    setColor(colorQuark) {
        this.colorQuark = colorQuark;
        if (this.colorQuark === "antired") {
            this.color = "#d54040";
        }
        else if (this.colorQuark === "antigreen") {
            this.color = "#40d540";
        }
        else if (this.colorQuark === "antiblue") {
            this.color = "#4040d5";
        }
    }
}
//# sourceMappingURL=AntiQuark.js.map