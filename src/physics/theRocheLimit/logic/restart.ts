import { parts } from "./parts"

export const restart = () => {
    for (let i = 1; i < parts.length; i++) {
        parts[i].x = Math.floor(window.innerWidth / 2) + Math.random() * 10
        parts[i].y =  150 + Math.random() * 10
        parts[i].speedX =  2.09
        parts[i].speedY =  0
    }
}