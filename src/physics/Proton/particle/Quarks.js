import { Quark } from "./Quark";
export class U_quark extends Quark {
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
export class D_quark extends Quark {
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
export class C_quark extends Quark {
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
export class S_quark extends Quark {
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
export class T_quark extends Quark {
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
export class B_quark extends Quark {
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
//# sourceMappingURL=Quarks.js.map