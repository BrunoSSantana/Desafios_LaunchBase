const users = [
    {
      nome: "Salvio",
      receitas: [115.3, 48.7, 98.3, 14.5],
      despesas: [85.3, 13.5, 19.9]
    },
    {
      nome: "Marcio",
      receitas: [24.6, 214.3, 45.3],
      despesas: [185.3, 12.1, 120.0]
    },
    {
      nome: "Lucia",
      receitas: [9.8, 120.3, 340.2, 45.3],
      despesas: [450.2, 29.9]
    }
  ];

//receitas e despesas
function calculaSaldo(receitas, despesas) {

  //somaNumeros vem aki
  const rec = somaNumeros(receitas)
  const dsp = somaNumeros(despesas)

  //retorna receita - despesas
  const saldo = rec - dsp
  return saldo
}

//numeros é um array
function somaNumeros(numeros) {
  // retorna a soma do array
  let tot = 0
  for ( numero of numeros) {
    tot += numero
  }
  return tot

}

for (let user of users) {

  const saldo = calculaSaldo(user.receitas, user.despesas)

  const saldoPositivo = saldo >= 0
  if (saldoPositivo) {
    console.log(`${user.nome} possui saldo POSITIVO de  ${saldo.toFixed(2)}`)
  } else {
    console.log(`${user.nome} possui saldo NEGATIVO de ${saldo.toFixed(2)}`)
  }
}