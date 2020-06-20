const programmer = {
    name: 'Bruno',
    age: 23,
    technologies: [
        { name: 'C++', expertise: 'Desktop' },
        { name: 'Python', expertise: 'Data Science' },
        { name: 'JavaScript', expertise: 'Web/Mobile' }
    ]
}
console.log(`The user ${programmer.name} is ${programmer.age} years old and uses ${programmer.technologies[0].name} with expertise in ${programmer.technologies[0].expertise}`)