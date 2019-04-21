function SuperType() {
  this.property = true
}

SuperType.prototype.getSuperValue = function() {
  return this.property
}

function SubType() {
  this.subproperty = false
}

SubType.prototype = new SuperType() 

SubType.prototype.getSuperValue = function() {
  return this.subproperty
}

var instance = new SubType()
alert(instance.getSuperValue()) // true