var Queue = function() {
  var someInstance = {};

  // Use an object with numeric keys to store values
  var storage = {};

  // Implement the methods below

  someInstance.enqueue = function(value) {

    _.each(storage, function(val, key){
      console.log(storage);
      storage[+key + 1] = val;
    })
    storage[0] = value;
  };

  someInstance.dequeue = function() {
    var temp = storage[someInstance.size() - 1];
    delete storage[someInstance.size() -1];
    return temp;
  };

  someInstance.size = function() {
    var count = 0;
    for(var key in storage){
      count++;
    }
    return count;
  };

  return someInstance;
};
