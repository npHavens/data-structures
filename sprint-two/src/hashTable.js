

var HashTable = function() {
  this._limit = 8;
  this._storage = LimitedArray(this._limit);
};

HashTable.prototype.insert = function(k, v) {
  var index = getIndexBelowMaxForKey(k, this._limit);
  var bucket = this._storage[index];
  var tuple = [k,v];

  console.log(JSON.stringify(this))

  if(bucket){
    _.each(bucket, function(element,i){
      if(bucket[i][0] === k){
        bucket[i][1] = v;
      }
    });
  }

  else{
    console.log()
    //console.log(JSON.stringify(this._storage));
    //this._storage.set(index, [tuple]);
    //this._storage.set(index,[tuple]);
    this._storage[index] = [tuple];
  }
  //console.log(JSON.stringify(this._storage.set));

};

HashTable.prototype.retrieve = function(k) {
  var index = getIndexBelowMaxForKey(k, this._limit);
  var bucket = this._storage[index];
  var target;
  _.each(bucket, function(element, i){
    if (bucket[i]){
            target = bucket[i][1];

    }
  });
  return target;
};

HashTable.prototype.remove = function(k) {
  var index = getIndexBelowMaxForKey(k, this._limit);
  var bucket = this._storage[index];
  _.each(bucket, function(element, i){
    if (bucket[i][0] === k){
      bucket[i] = undefined;
    }
  });

};



/*
 * Complexity: What is the time complexity of the above functions?




 */



