function containsRepeatingLetter(str) {
  var result = str.toLowerCase().split('')
  var result2 = []
  result.forEach(function(el) {
    console.log(el)
    if(result2.includes(el)) {
      return true
    } else {
      result2.push(el)
    }
  })
  return false
}

var show = containsRepeatingLetter('rattler')
console.log(show)