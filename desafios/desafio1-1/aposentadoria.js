const name = 'Bruno'
const sexo = 'M'
const age = 50
const contribuicao = 23

function aposentadoria() {
    if (sexo == 'M' && contribuicao >= 35 || sexo == 'F' && contribuicao >= 30){
        if (sexo == 'M' && age+contribuicao >= 95) {
            console.log(`${name}, you still can retire!`)
        } else if (sexo == 'F' && age+contribuicao >= 85) {
            console.log(`${name}, you still can retire!`)
        } else {
            console.log(`${name}, you still can't retire!`)
        }
    } else {
        console.log(`${name}, you still can't retire!`)
    }
}
aposentadoria()