import { U_quark, D_quark, C_quark, S_quark, T_quark, B_quark } from "../particle/Quarks";
import { Z_bozon, WPositiwe_bozon, WNegative_bozon } from "../particle/Bozons";
import { GluonField } from "../particle/GluonField";

export type Quark = U_quark | D_quark | C_quark | S_quark | T_quark | B_quark
export type Bozon = Z_bozon | WPositiwe_bozon | WNegative_bozon

export const quarks: Quark[] = []
export const bozons: Bozon[] = []
export const gluonFieldParticle: GluonField[] = []

const RADIUS_PROTON = 200
const gluonFieldParticleCount = 7000

for (let i = 0; i < gluonFieldParticleCount; i++) {
    gluonFieldParticle.push(new GluonField(
        {
            x: window.innerWidth * Math.random(),
            y: window.innerHeight * Math.random()
        }
    ))
}

quarks.push(new U_quark(
    {
        x: Math.floor(window.innerWidth / 2),
        y: Math.floor(window.innerHeight / 2) + RADIUS_PROTON
    },
    "blue",
    0
))

quarks.push(new U_quark(
    {
        x: Math.floor(window.innerWidth / 2) - RADIUS_PROTON * Math.sqrt(3) / 2,
        y: Math.floor(window.innerHeight / 2) - RADIUS_PROTON * 0.5
    }
    ,
    "green",
    1
))

quarks.push(new D_quark(
    {
        x: Math.floor(window.innerWidth / 2) + RADIUS_PROTON * Math.sqrt(3) / 2,
        y: Math.floor(window.innerHeight / 2) - RADIUS_PROTON * 0.5
    },
    "red",
    2
))


