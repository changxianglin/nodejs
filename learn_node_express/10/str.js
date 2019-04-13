function containsNumber(str) {
  var result = str.split('')
  for( var i = 0; i < result.length; i++) {
    if(Number(result[i]) >= 0 && Number(result[i])) {
      return true
    } 
  }
  return false
}

var show = containsNumber('abc123')
console.log(show)