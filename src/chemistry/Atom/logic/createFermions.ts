import { Proton, Neutron } from "../../elements/element"


export const createFermions = (proton: number, neutron: number, array: Array<Proton | Neutron>) => {
    const size = 2 * Math.sqrt(neutron + proton)
    for (let i = 0; array.length < proton; i++) {
        const distanceX = (Math.random() - 0.5) * size
        const distanceY = (Math.random() - 0.5) * size

        if ((Math.pow(distanceX, 2) + Math.pow(distanceY, 2)) < Math.pow(size / 2, 2)) {
            array.push(new Proton(window.innerWidth / 2 + distanceX, window.innerHeight / 2 + distanceY - 100))
        }
    }

    for (let i = 0; (array.length - proton) < neutron; i++) {
        const distanceX = (Math.random() - 0.5) * size
        const distanceY = (Math.random() - 0.5) * size

        if ((Math.pow(distanceX, 2) + Math.pow(distanceY, 2)) < Math.pow(size / 2, 2)) {
            array.push(new Neutron(window.innerWidth / 2 + distanceX, window.innerHeight / 2 + distanceY - 100))
        }
    }

    array.sort(() => Math.random() - 0.5)
}