function add(num1, num2) {
  var sum = num1 + num2
  return sum
}

function MyObject() {
  var privateVariable = 10
  function privateFunction() {
    return false
  }
  
  this.publicMethod = function() {
    privateVariable++
    return privateFunction()
  }
}