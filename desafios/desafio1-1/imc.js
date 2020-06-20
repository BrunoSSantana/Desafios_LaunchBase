const name = 'Bruno'
const weight = 70
const height = 1.76

const student = [
    {
        name: 'Bruno',
        weight: 70,
        height: 1.76
    }
]

imc = student[0].weight/(student[0].height**2)

function result(student) {
    if (imc >= 30) {
        console.log(`${student[0].name}, his IMC was ${imc}, are you overweight`)
    } else {
        console.log(`${student[0].name}, his IMC was ${imc}, are you not overweight`)
    }
}
result(student)