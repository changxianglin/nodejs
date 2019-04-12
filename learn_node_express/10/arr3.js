function removeWithoutCopy(arr, item) {
  for(var i = 0; i < arr.length; i++) {
    if(arr[i] === item) {
      arr.splice(i, 1)
      i = 0
    }
  }
  return arr 
}

var show = removeWithoutCopy([1, 2, 2, 3, 4, 2, 2], 2)
console.log(show)