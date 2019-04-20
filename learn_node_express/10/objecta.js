var person = new Object()
person.name = "Nicholas"
person.age = 29
person.job = "Software Engineer"

person.sayName = function() {
  alert(this.name)
}

var person = {
  name: "Nicholas",
  age: 29,
  job: "Software Engineer",

  sayName: function() {
    alert(this.name)
  }
}

function createPerson(name, age, job) {
  var o = new Object()
  o.name = name
  o.age = age
  o.job = job
  o.sayName = function() {
    alert(this.name)
  }
  return o
}

var person1 = createPerson("Nicholas", 29, "Sofware Enginer")
var person2 = createPerson("Greg", 27, "Doctor")

