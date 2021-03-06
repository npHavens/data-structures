var LinkedList = function() {
  var list = {};
  list.head = null;
  list.tail = null;

  list.addToTail = function(value) {
    var node = Node(value);
    if(!list.head){
      list.head = node;
      list.tail = node;
    } else {
      list.tail.next = node;
      list.tail = node;
    }
  };

  list.removeHead = function() {

    var formerHeadValue = list.tail.value;
    // console.log('former head value is :' + formerHeadValue);

    list.head = list.head.next;
    // list.tail = null;
    // console.log('list is now: ' + JSON.stringify(list));


    return formerHeadValue;
  };

  list.contains = function(target) {

    var obj = list.head;
    //console.log(JSON.stringify(obj));
    while (obj){
      // console.log(JSON.stringify(obj));
      // console.log('This is the obj.value: ' + obj.value);
      if (obj.value === target) {
        //console.log('true')
        return true;
      } else {
        obj = obj.next;
      }
    }
    return false;
  };

  list.getNodeValueAt = function(n) {
    var obj = list.head;
    var counter = 1;

    while (obj) {
      if (counter === n) {
        return obj.value;
      }
      obj = obj.next;
      counter++;
    }
    return null;
  };

  list.insertNodeAt = function(value, nodeNumber) {
    var obj = list.head;
    var counter = 1;
    while (obj) {
      if (counter === nodeNumber) {
        var temp = obj.next;
        var node = Node(value);
        node.next = temp;
        obj.next = node;
        break;
      } else {
        counter++;
        obj = obj.next;
      }
    }
    list.addToTail(value);
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
//list.addToTail = O(1)
//list.removeHead = O(1)
//list.contains = O(n)
//list.getNodeValue = O(n)
//list.insertNodeAt = O(n)



 */
