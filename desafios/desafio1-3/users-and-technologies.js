const users = [
    { 
        name: 'Bruno',
        technologies: ['HTML', 'CSS'] },
    { 
        name: 'Souza',
        technologies: ['JavaScript', 'Python'] },
    { 
        name: 'Santana', 
        technologies: ['Vue.Js', 'Node.js'] }
  ];

for (let user of users) {
    console.log(`${user.name} works with ${user.technologies.join(', ')} `)
}
