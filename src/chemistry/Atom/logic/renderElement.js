import { fermions, electrons } from "./parts";
import { createElectronOrbital } from "./createElectronOrbital";
import { createFermions } from "./createFermions";
const drawParticle = (context, point) => {
    context.fillStyle = `${point.color}`;
    context.beginPath();
    context.arc(point.coordinates.x, point.coordinates.y, point.size, 0, 2 * Math.PI);
    context.fill();
};
export const renderElement = (ctx, electronList, protonCount, neutronCount) => {
    if (ctx) {
        for (let i = electrons.length; i > 0; i--) {
            electrons.pop();
        }
        for (let i = fermions.length; i > 0; i--) {
            fermions.pop();
        }
        for (let i = 0; i < electronList.length; i++) {
            const distance = [35, 70, 105, 140, 175, 210, 245];
            createElectronOrbital(distance[i], electronList[i], electrons);
        }
        createFermions(protonCount, neutronCount, fermions);
        for (let i = 0; i < fermions.length; i++) {
            drawParticle(ctx, fermions[i]);
        }
        for (let i = 0; i < electrons.length; i++) {
            drawParticle(ctx, electrons[i]);
        }
    }
};
//# sourceMappingURL=renderElement.js.map