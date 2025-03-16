import { Grid } from "./parts";

export const addGrid = (array: Grid[], frameIndex: number) => {
    if (frameIndex % 100 === 0) {
        for (let j = -900; j < window.innerWidth + 900; j += 14) {
            array.push({
                color: "#353535",
                coordinates: {
                    x: j,
                    y: -300
                },
                size: 2,
                speedY: 0,
                speedX: 0
            })
        }

        for (let j = -900; j < window.innerWidth + 900; j += 14) {
            array.push({
                color: "#353535",
                coordinates: {
                    x: j,
                    y: window.innerHeight + 300
                },
                size: 2,
                speedY: 0,
                speedX: 0
            })
        }

        for (let j = -900; j < window.innerHeight + 900; j += 14) {
            array.push({
                color: "#353535",
                coordinates: {
                    x: -300,
                    y: j
                },
                size: 2,
                speedY: 0,
                speedX: 0
            })
        }

        for (let j = -900; j < window.innerHeight + 900; j += 14) {
            array.push({
                color: "#353535",
                coordinates: {
                    x: window.innerWidth + 300,
                    y: j
                },
                size: 2,
                speedY: 0,
                speedX: 0
            })
        }
    }
}