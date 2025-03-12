import { GluonField } from "../../../Proton/particle/GluonField"

export const gluonFieldParticleExplanation: GluonField[] = []

const gluonFieldParticleCount = 10000

for (let i = 0; i < gluonFieldParticleCount; i++) {
    gluonFieldParticleExplanation.push(new GluonField(
        {
            x: 960 * Math.random(),
            y: 500 * Math.random()
        }
    ))
}

for (let i = 0; i < gluonFieldParticleCount; i++) {
    gluonFieldParticleExplanation[i].setColor(`rgba(65, 65, 65, 1)`)
}