function square(arr) {
  var result = []
  arr.map((el) => (result.push(el * el)))
  return result
}

var show = square([1, 2, 3, 4])
console.log(show)