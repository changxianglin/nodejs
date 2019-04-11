function indexOf(arr, item) {
  if(arr.indexOf(item) > -1) {
    return arr.indexOf(item)
  } else {
    return -1
  }
}

var show = indexOf([1, 2, 3, 4], 3)

console.log(show)