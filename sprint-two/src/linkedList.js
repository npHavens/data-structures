var LinkedList = function() {
  var list = {};
  list.head = null;
  list.tail = null;

  list.addToTail = function(value) {
    // console.log('Adding a node here');
    // console.log('list was', JSON.stringify(list));
    var node = Node(value);
    // if(list.head === null){
    //   list.head = node;
    // }
    list.head = list.tail;
    list.tail = node;
    // console.log('list is now', JSON.stringify(list));
  };



  list.removeHead = function() {
    // console.log('list was', JSON.stringify(list));
    // console.log('');
    // console.log('Value of the list.head: ');
    // console.log(list.tail);

    var formerHeadValue = list.tail.value;
    //console.log('former head value is :' + formerHeadValue);

    list.head = list.tail;
    list.tail = null;
    // console.log('list is now: ' + JSON.stringify(list));


    return formerHeadValue;
  };

  list.contains = function(target) {
        console.log('list is now: ' + JSON.stringify(list));

    for( var keys in list){
      console.log(keys);
      console.log(keys.value);
      if(keys.value === target){
        return true;
      }
    }
    return false;
  };

  return list;
};



var Node = function(value) {
  var node = {};

  node.value = value;
  node.next = null;

  return node;
};

/*
 * Complexity: What is the time complexity of the above functions?




 */
