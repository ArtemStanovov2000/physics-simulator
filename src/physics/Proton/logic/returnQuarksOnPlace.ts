import { Quark, RADIUS_PROTON } from "./parts";

const FORSE = 25

export const returnQuarksOnPlace = (quarks: Quark[]) => {
    for (let i = 0; i < 3; i++) {
        if (quarks[i].id === 0) {
            quarks[i].speedX = -(quarks[i].coordinates.x - Math.floor(window.innerWidth / 2)) / FORSE
            quarks[i].speedY = (Math.floor(window.innerHeight / 2) + RADIUS_PROTON - quarks[i].coordinates.y) / FORSE
            quarks[i].move()
        }
        if (quarks[i].id === 1) {
            quarks[i].speedX = ((Math.floor(window.innerWidth / 2) - RADIUS_PROTON * Math.sqrt(3) / 2) - quarks[i].coordinates.x) / FORSE
            quarks[i].speedY = ((Math.floor(window.innerHeight / 2) - RADIUS_PROTON * 0.5) - quarks[i].coordinates.y) / FORSE
            quarks[i].move()
        }
        if (quarks[i].id === 2) {
            quarks[i].speedX = ((Math.floor(window.innerWidth / 2) + RADIUS_PROTON * Math.sqrt(3) / 2) - quarks[i].coordinates.x) / FORSE
            quarks[i].speedY = ((Math.floor(window.innerHeight / 2) - RADIUS_PROTON * 0.5) - quarks[i].coordinates.y) / FORSE
            quarks[i].move()
        }
    }
}