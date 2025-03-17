import { Grid } from "./parts";
import { elements } from "./parts";
import { BaseRock } from "../baseRock/baseRock";

export const addGrid = (array: Grid[], frameIndex: number, radius: number) => {
    if (frameIndex % 100 === 0) {
        const LENGTH_SPACE = 15
        const countArc = Math.floor(radius * 2 * Math.PI / LENGTH_SPACE)
    
        for (let i = 0; i < countArc; i++) {
            array.push({
                color: "#353535",
                coordinates: {
                    x: Math.cos(i / (radius / LENGTH_SPACE)) * radius + window.innerWidth / 2,
                    y: Math.sin(i / (radius / LENGTH_SPACE)) * radius + window.innerHeight / 2
                },
                size: 2,
                speedY: 0,
                speedX: 0
            })
        }

        elements.push(
            new BaseRock({x: 20, y: 20})
        )
    }

    if (frameIndex % 10 === 0) {
        const LENGTH_SPACE = 200
        const countArc = Math.floor(radius * 2 * Math.PI / LENGTH_SPACE)
    
        for (let i = 0; i < countArc; i++) {
            array.push({
                color: "#353535",
                coordinates: {
                    x: Math.cos(i / (radius / LENGTH_SPACE)) * radius + window.innerWidth / 2,
                    y: Math.sin(i / (radius / LENGTH_SPACE)) * radius + window.innerHeight / 2
                },
                size: 2,
                speedY: 0,
                speedX: 0
            })
        }
    }
}