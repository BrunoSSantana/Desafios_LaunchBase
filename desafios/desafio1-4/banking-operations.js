const user = {
    name: "Mariana",
    transactions: [],
    balance: 0
};

console.log(`${user.balance}`)

let transaction = { type: 'credit', value: 50 }

function createTransaction(transaction) {
  
  if (transaction.type === 'credit') {
    
    let valorSoma = transaction.value + user.balance
    valorSoma.push(user.balance)

  } else if ( transaction.type === 'debit') {

    let valorSoma = transaction.value - user.balance
    valorSoma.push(user.balance)

  } else {
    
    console.log('ERRO NA TRANSAÇÃO!')
  }
}

console.log(`${user.balance}`)