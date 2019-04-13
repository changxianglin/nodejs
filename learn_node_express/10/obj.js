function iterate(obj) {
  return Object.keys(obj).map((el) => {
    console.log(el + ':' + obj[el])
    return el + ':'+ obj[el]
  })
}

var C = function() {this.foo = 'bar'; this.baz = 'bim';}; 
C.prototype.bop = 'bip'; 
iterate(new C());