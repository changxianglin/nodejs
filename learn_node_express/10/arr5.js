function duplicates(arr) {
  var result = []
  var count = []
  for(var i = 0; i < arr.length; i++) {
    if(result.includes(arr[i]) && (!count.includes(arr[i]))) {
      count.push(arr[i])
    } else {
      result.push(arr[i])
    }
  }
  return count.sort()
}

var show = duplicates([1, 2, 4, 4, 3, 3, 1, 5, 3])
console.log(show)


function duplicates2(arr) {
  var result = []
  arr.forEach(function(el) {
    if(arr.indexOf(el) != arr.lastIndexOf(el) && result.indexOf(el) == -1) {
      result.push(el)
    }
  })
  return result.sort()
}

var show2 = duplicates2([1, 2, 4, 4, 3, 3, 1, 5, 3])
console.log(show2)