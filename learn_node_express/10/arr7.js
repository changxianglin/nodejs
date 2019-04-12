function findAllOccurrences(arr, target) {
  var result = []
  arr.map((el, index) => {
    if(el === target) {
      result.push(index)
    }
  })
  return result
}