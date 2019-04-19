// Undefined, Null, Boolean, Number, String 基本数据类型
// Object 复杂数据类型


// 作用域链这种机制引出了而一个值得注意的问题， 即闭包只能保皇函数中任何变量。

function outputNumbers(count) {
  for(var i = 0; i < count; i++) {
    alert(i)
  }
  alert(i)
}

