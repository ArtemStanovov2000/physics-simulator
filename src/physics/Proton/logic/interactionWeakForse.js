import { Z_bozon } from "../particle/Bozons";
const DISTANSE = 250;
export const interactionWeakForse = (quarks, bozons) => {
    if (Math.random() < 0.1) {
        const randomIndex = Math.floor(quarks.length * Math.random());
        let randomIndexTwo = Math.floor(quarks.length * Math.random());
        while (randomIndexTwo === randomIndex) {
            randomIndexTwo = Math.floor(quarks.length * Math.random());
        }
        if (quarks[randomIndex].colorQuark !== quarks[randomIndexTwo].colorQuark && Math.sqrt(Math.pow((quarks[randomIndex].coordinates.x - quarks[randomIndexTwo].coordinates.x), 2) + Math.pow((quarks[randomIndex].coordinates.y - quarks[randomIndexTwo].coordinates.y), 2)) < DISTANSE) {
            const firstPointCoordinates = quarks[randomIndex].coordinates;
            const secondPointCoordinates = quarks[randomIndexTwo].coordinates;
            const firstPointId = quarks[randomIndex].id;
            const secondPointId = quarks[randomIndexTwo].id;
            quarks[randomIndex].coordinates = secondPointCoordinates;
            quarks[randomIndexTwo].coordinates = firstPointCoordinates;
            quarks[randomIndex].id = secondPointId;
            quarks[randomIndexTwo].id = firstPointId;
            bozons.push(new Z_bozon({
                x: (quarks[randomIndex].coordinates.x - quarks[randomIndexTwo].coordinates.x) * Math.random() + quarks[randomIndexTwo].coordinates.x,
                y: (quarks[randomIndex].coordinates.y - quarks[randomIndexTwo].coordinates.y) * Math.random() + quarks[randomIndexTwo].coordinates.y
            }, "red"));
        }
    }
};
//# sourceMappingURL=interactionWeakForse.js.map