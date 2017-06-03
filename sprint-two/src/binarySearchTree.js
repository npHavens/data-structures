var BinarySearchTree = function(value) {
  var newTree = {'value': value, 'left': null, 'right': null };

  newTree.insert = function(val) {
    if (newTree.value < val) {
      if (!newTree.right) {
        newTree.right = BinarySearchTree(val);
      } else {
        return newTree.right.insert(val);
      }
    }
    if (newTree.value > val) {
      if (!newTree.left) {
        newTree.left = BinarySearchTree(val);
      } else {
        return newTree.left.insert(val);
      }
    }
  // Look at the tree
  // Check if the top value is greater than or less than inserted value
    // If greater, check right branch to see if it exists
       //If it does exist, set the right branch to rightbranch.insert(value)
       //If doesn't exist set rightbranch to BinarySearchTree(value)
    // If lesser, check the left branch for existentialism
      // If doesn't exist, set the left branch value to BinarySearchTree(value)
      // If it does exist, search the node/tree for

  };

  newTree.contains = function(val) {
    if (newTree.value === val) {
      return true;
    }
    if (newTree.value > val && newTree.left) {
      return newTree.left.contains(val);
    }
    if (newTree.right) {
      return newTree.right.contains(val);
    }
    return false;
  };

  newTree.depthFirstLog = function(callback) {
    callback(newTree.value);
    if (newTree.left) {
      newTree.left.depthFirstLog(callback);
    }
    if (newTree.right) {
      newTree.right.depthFirstLog(callback);
    }
  };

  return newTree;
};



/*
 * Complexity: What is the time complexity of the above functions?
 */
