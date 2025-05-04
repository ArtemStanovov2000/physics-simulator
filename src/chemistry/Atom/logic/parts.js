import { Proton, Neutron } from "../../elements/element";
export const fermions = [];
export const electrons = [];
for (let i = 0; i < 56; i++) {
    if (Math.random() < 0.5) {
        fermions.push(new Proton(window.innerWidth / 2 + Math.random() * 20 - 10, window.innerHeight / 2 + Math.random() * 20 - 10));
    }
    else {
        fermions.push(new Neutron(window.innerWidth / 2 + Math.random() * 20 - 10, window.innerHeight / 2 + Math.random() * 20 - 10));
    }
}
//# sourceMappingURL=parts.js.map