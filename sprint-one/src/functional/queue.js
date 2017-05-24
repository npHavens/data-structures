var Queue = function() {
  var someInstance = {};

  // Use an object with numeric keys to store values
  var storage = {};

  // Implement the methods below

  someInstance.enqueue = function(value) {
  };

  someInstance.dequeue = function() {
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
