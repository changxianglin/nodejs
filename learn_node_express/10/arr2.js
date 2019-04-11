function remove(arr, item) {
  var result = []
  arr.map(ele => {
    if(ele !== item) {
      result.push(ele)
    }
  })
  return result
}

var show = remove([1, 2, 3, 4, 2], 2)
console.log(show)