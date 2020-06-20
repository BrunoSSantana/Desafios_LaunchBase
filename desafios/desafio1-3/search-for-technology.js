const users = [
  { name: 'Bruno', technologies: ['CSS', 'HTML'] },
  { name: 'Souza', technologies: ['JavaScript', 'Python'] },
  { name: 'Santana', technologies: ['Vue.Js', 'Node.js'] }
];


function checaSeuUsuarioUsaCSS (users) {
  // Percorra o array de tecnologias do usuário até encontrar se ele trabalha com CSS
  for (let tecnologia of users.technologies) {
    if (tecnologia == 'CSS') {
      return true;
    } else {
      return false
    }

  }
  // SE encontrar, retorne true da função, caso contrário retorne false
  /* if () {

  } */
}

for (let i = 0; i < users.length; i++) { //e o for of?
  const usuarioTrabalhaComCSS = checaSeuUsuarioUsaCSS(users[i]);

  if (usuarioTrabalhaComCSS) {
    console.log(`O usuário ${users[i].name} trabalha com CSS`);
  }
}


