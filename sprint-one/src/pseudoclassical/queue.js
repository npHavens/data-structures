var Queue = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,

 this.storage = {}; // but try not not reference your old code in writing the new style.
};

Queue.prototype.enqueue = function(value){


}

Queue.prototype.dequeue = function(){
var firstAdded = this.storage[this.size() - 1];
delete this.storage[this.size() -1];
return firstAdded;
}

Queue.prototype.size = function(){

  return Object.keys(this.storage).length;
}
