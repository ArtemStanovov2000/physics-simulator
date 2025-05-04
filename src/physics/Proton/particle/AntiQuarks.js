import { AntiQuark } from "./AntiQuark";
export class Anti_U_quark extends AntiQuark {
    charge;
    mass;
    generation;
    name;
    constructor(coordinates, colorQuark, id, speedX, speedY) {
        super(coordinates, 12, 13, colorQuark, id, speedX, speedY);
        this.charge = 0.666;
        this.mass = 2.16;
        this.generation = 1;
        this.name = "U";
    }
}
export class Anti_D_quark extends AntiQuark {
    charge;
    mass;
    generation;
    name;
    constructor(coordinates, colorQuark, id, speedX, speedY) {
        super(coordinates, 12, 13, colorQuark, id, speedX, speedY);
        this.charge = -0.333;
        this.mass = 4.67;
        this.generation = 1;
        this.name = "D";
    }
}
export class Anti_C_quark extends AntiQuark {
    charge;
    mass;
    generation;
    name;
    constructor(coordinates, colorQuark, id, speedX, speedY) {
        super(coordinates, 12, 13, colorQuark, id, speedX, speedY);
        this.charge = 0.666;
        this.mass = 1270;
        this.generation = 2;
        this.name = "C";
    }
}
export class Anti_S_quark extends AntiQuark {
    charge;
    mass;
    generation;
    name;
    constructor(coordinates, colorQuark, id, speedX, speedY) {
        super(coordinates, 12, 13, colorQuark, id, speedX, speedY);
        this.charge = -0.333;
        this.mass = 93.4;
        this.generation = 2;
        this.name = "S";
    }
}
export class Anti_T_quark extends AntiQuark {
    charge;
    mass;
    generation;
    name;
    constructor(coordinates, colorQuark, id, speedX, speedY) {
        super(coordinates, 12, 13, colorQuark, id, speedX, speedY);
        this.charge = 0.666;
        this.mass = 172700;
        this.generation = 3;
        this.name = "T";
    }
}
export class Anti_B_quark extends AntiQuark {
    charge;
    mass;
    generation;
    name;
    constructor(coordinates, colorQuark, id, speedX, speedY) {
        super(coordinates, 12, 13, colorQuark, id, speedX, speedY);
        this.charge = -0.333;
        this.mass = 4180;
        this.generation = 3;
        this.name = "B";
    }
}
//# sourceMappingURL=AntiQuarks.js.map