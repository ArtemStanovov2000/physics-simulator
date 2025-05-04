export class Proton {
    mass;
    size;
    color;
    speedX;
    speedY;
    coordinates;
    constructor(x, y) {
        this.mass = 1;
        this.size = 5;
        this.color = "#d54040";
        this.coordinates = { x: x, y: y };
        this.speedX = 0;
        this.speedY = 0;
    }
    move() {
        this.coordinates.x += this.speedX;
        this.coordinates.y += this.speedY;
    }
}
export class Neutron {
    mass;
    size;
    color;
    speedX;
    speedY;
    coordinates;
    constructor(x, y) {
        this.mass = 1;
        this.size = 5;
        this.color = "#606060";
        this.coordinates = { x: x, y: y };
        this.speedX = 0;
        this.speedY = 0;
    }
    move() {
        this.coordinates.x += this.speedX;
        this.coordinates.y += this.speedY;
    }
}
export class Electron {
    mass;
    size;
    color;
    coordinates;
    constructor(x, y) {
        this.mass = 1;
        this.size = 2;
        this.color = "#909090";
        this.coordinates = { x: x, y: y };
    }
}
//# sourceMappingURL=element.js.map