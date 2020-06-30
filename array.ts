const person = {
  name: 'Kaori',
  age: 24,
  hobbies: ['sports', 'music']
}

console.log(person)

for(const hobby of person.hobbies){
  console.log(hobby.toUpperCase())
}