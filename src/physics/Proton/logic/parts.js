import { U_quark, D_quark } from "../particle/Quarks";
import { GluonField } from "../particle/GluonField";
export const quarks = [];
export const virtualParticle = [];
export const mezons = [];
export const bozons = [];
export const gluonFieldParticle = [];
export const RADIUS_PROTON = 140;
const gluonFieldParticleCount = 7000;
for (let i = 0; i < gluonFieldParticleCount; i++) {
    gluonFieldParticle.push(new GluonField({
        x: window.innerWidth * Math.random(),
        y: window.innerHeight * Math.random()
    }));
}
quarks.push(new U_quark({
    x: Math.floor(window.innerWidth / 2),
    y: Math.floor(window.innerHeight / 2) + RADIUS_PROTON
}, "blue", 0));
quarks.push(new U_quark({
    x: Math.floor(window.innerWidth / 2) - RADIUS_PROTON * Math.sqrt(3) / 2,
    y: Math.floor(window.innerHeight / 2) - RADIUS_PROTON * 0.5
}, "green", 1));
quarks.push(new D_quark({
    x: Math.floor(window.innerWidth / 2) + RADIUS_PROTON * Math.sqrt(3) / 2,
    y: Math.floor(window.innerHeight / 2) - RADIUS_PROTON * 0.5
}, "red", 2));
//# sourceMappingURL=parts.js.map