

var HashTable = function() {	
  this._limit = 8;
  this._storage = LimitedArray(this._limit);
};

HashTable.prototype.insert = function(k, v) {
  var index = getIndexBelowMaxForKey(k, this._limit);
  var bucket = this._storage.get(index);
  var tuple = [k, v];
  var newBucket = [];
 
  if (bucket) {
    newBucket = _.map(bucket, function(element, i) {
      if (bucket[i][0] === k) {
        return tuple;
      }
      return element;
    });
  }
  newBucket.push(tuple);
  this._storage.set(index, newBucket);
};

HashTable.prototype.retrieve = function(k) {
  var index = getIndexBelowMaxForKey(k, this._limit);
  var bucket = this._storage.get(index);
  var target;
  _.each(bucket, function(element, i) {
    if (bucket[i] && bucket[i][0] === k) {
      target = bucket[i][1];
    }
  });
  return target;
};

HashTable.prototype.remove = function(k) {
  var index = getIndexBelowMaxForKey(k, this._limit);
  var bucket = this._storage.get(index);
  _.each(bucket, function(element, i) {
    if (bucket[i][0] === k ) {
      bucket[i] = undefined;
    }
  });
};



/*
 * Complexity: What is the time complexity of the above function.s?
All O(1)
 */



