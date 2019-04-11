function removeWithoutCopy(arr, item) {
  arr.forEach((el, index) => {
    if(el === item) {
      arr.splice(index, 1)
    }
  })
  return arr
}