export class Quark {
    speedX;
    speedY;
    spin;
    group;
    family;
    id;
    size;
    textSize;
    color;
    colorQuark;
    anticolorQuark;
    textOffsetX;
    textOffsetY;
    coordinates;
    constructor(coordinates, textOffsetX, textOffsetY, colorQuark, id, speedX, speedY) {
        this.speedX = speedX || 0;
        this.speedY = speedY || 0;
        this.spin = 0.5;
        this.group = "quark";
        this.family = "fermion";
        this.id = id;
        this.size = 30;
        this.textSize = 35;
        this.color = "";
        this.colorQuark = colorQuark;
        this.anticolorQuark = "antiblue";
        this.textOffsetX = textOffsetX;
        this.textOffsetY = textOffsetY;
        this.coordinates = coordinates;
        if (this.colorQuark === "red") {
            this.color = "#d54040";
            this.anticolorQuark = "antired";
        }
        else if (this.colorQuark === "green") {
            this.color = "#40d540";
            this.anticolorQuark = "antigreen";
        }
        else if (this.colorQuark === "blue") {
            this.color = "#4040d5";
            this.anticolorQuark = "antiblue";
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
        if (this.colorQuark === "red") {
            this.color = "#d54040";
            this.anticolorQuark = "antired";
        }
        else if (this.colorQuark === "green") {
            this.color = "#40d540";
            this.anticolorQuark = "antigreen";
        }
        else if (this.colorQuark === "blue") {
            this.color = "#4040d5";
            this.anticolorQuark = "antiblue";
        }
    }
}
//# sourceMappingURL=Quark.js.map