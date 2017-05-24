var Stack = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  var someInstance = {storage: {}};

  _.extend(someInstance, stackMethods);
  return someInstance;
};

var stackMethods = {};

stackMethods.push = function(value){
  this.storage[this.size()] = value;
};

stackMethods.pop = function() {
  var lastAdded = this.storage[this.size() - 1];
  delete this.storage[this.size() - 1];
  return lastAdded;
};

stackMethods.size = function(){
 console.log(this.storage);
  return Object.keys(this.storage).length;
}
