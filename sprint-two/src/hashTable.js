

var HashTable = function() {
  this._limit = 8;
  this._storage = LimitedArray(this._limit);
  this.size = 0;
};

HashTable.prototype.insert = function(k, v) {
  var index = getIndexBelowMaxForKey(k, this._limit);
  var bucket = this._storage.get(index);
  var tuple = [k, v];
  var newBucket = [];
  this.size++;
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
  this.resize();
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
  var table = this;
  var index = getIndexBelowMaxForKey(k, this._limit);
  var bucket = this._storage.get(index);
  _.each(bucket, function(element, i) {
    if (bucket[i][0] === k ) {
      table.size--;
      bucket[i] = undefined;
    }
  });
  this.resize();
};

HashTable.prototype.resize = function(){
  var change = this.size / this._limit;
  //console.log(JSON.stringify(this._storage));
  if(change > .75){
    this._limit*=2;
  }
  if(change < .25){
    this._limit*= .5;
  }

  var table = this;
  var duplicate = this.copy();

  this._storage = LimitedArray(this._limit);

  _.each(duplicate,function(tuple){
     //console.log(JSON.stringify(tuple));
      //if(tuple) {
        //table.insert(tuple[0], tuple[1]);
      //}
  });
  //console.log(JSON.stringify(this._storage));

};

HashTable.prototype.copy = function(){
  var copy = [];
  this._storage.each(function(bucket){
    if(bucket){
      copy = copy.concat(bucket);
    }
  });
  console.log(JSON.stringify(copy));
  return copy;
};

/*
 * Complexity: What is the time complexity of the above function.s?
All O(1)
 */



