import { Proton, Neutron, Electron } from "../../elements/element"

export const fermions: Array<Neutron | Proton> = []
export const electrons: Electron[] = []

for (let i = 0; i < 56; i++) {
    if(Math.random() < 0.5) {
        fermions.push(new Proton(window.innerWidth / 2 + Math.random() * 20 - 10, window.innerHeight / 2 + Math.random() * 20 - 10))
    } else {
        fermions.push(new Neutron(window.innerWidth / 2 + Math.random() * 20 - 10, window.innerHeight / 2 + Math.random() * 20 - 10))
    }
}

const electronCount = [2, 8, 14, 2]





