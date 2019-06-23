var person = {}
Object.defineProperty(person, 'name', {
  configurable: false,
  value: 'xianglin'
})

console.log(person.name)
delete person.name;
console.log(person.name)