import { fermions, electrons } from "./parts";
import { Proton, Neutron, Electron } from "../../elements/element";
import { createElectronOrbital } from "./createElectronOrbital";
import { createFermions } from "./createFermions";

const drawParticle = (context: CanvasRenderingContext2D, point:  Neutron | Proton | Electron) => {
    context.fillStyle = `${point.color}`;
    context.beginPath();
    context.arc(point.coordinates.x, point.coordinates.y, point.size, 0, 2 * Math.PI);
    context.fill();
}

export const renderElement = (ctx: CanvasRenderingContext2D | null | undefined, electronList: number[], protonCount: number, neutronCount: number) => {
    if (ctx) {
        for (let i = electrons.length; i > 0; i--) {
            electrons.pop()
        }

        for (let i = fermions.length; i > 0; i--) {
            fermions.pop()
        }

        for (let i = 0; i < electronList.length; i++) {
            const distance = [35, 70, 105, 140, 175, 210, 245]
            createElectronOrbital(distance[i], electronList[i], electrons)
        }

        createFermions(protonCount, neutronCount, fermions)

        for (let i = 0; i < fermions.length; i++) {
            drawParticle(ctx, fermions[i])
        }

        for (let i = 0; i < electrons.length; i++) {
            drawParticle(ctx, electrons[i])
        }
    }
}