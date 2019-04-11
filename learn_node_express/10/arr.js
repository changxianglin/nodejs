function sum(arr) {
  var s = 0
  arr.map(element => {
    s += element
  });
  return s
}

var show = sum([1, 2, 3, 4])
console.log(show)