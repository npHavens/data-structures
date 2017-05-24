var Queue = function() {
  var someInstance = {storage: {} };
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  _.extend(someInstance, queueMethods);
  return someInstance;
  // but try not not reference your old code in writing the new style.
};

var queueMethods = {};

queueMethods.enqueue = function(value){
  var storageInstance = this.storage;
  _.each(this.storage, function(val, key){
    storageInstance[+key + 1] = val;
    });
   this.storage[0] = value;
  }

queueMethods.dequeue = function(){
  var firstAdded = this.storage[this.size() -1];
  delete this.storage[this.size() - 1];
  return firstAdded;
}


queueMethods.size = function(){
  return Object.keys(this.storage).length;
}
