var Tree = function(value) {
  var newTree = {};
  newTree.value = value;

  // your code here
  newTree.children = [];
  newTree.parent = null;
   // fix me
  _.extend(newTree, treeMethods);
  return newTree;
};

var treeMethods = {};

treeMethods.addChild = function(value) {

  var child = Tree(value);
  child.parent = this;
  this.children.push(child);
};

treeMethods.contains = function(target) {
  if (this.value === target) {
    return true;
  }
  if (this.children.length) {
    for (var i = 0; i < this.children.length; i++) {
      if (this.children[i].contains(target)) {
        return true;
      }
    }
  }
  return false;
};

treeMethods.sumOfChildrenCount = function(){
  return this.children.reduce(function(childCount, child) {
    if (child.children.length) {
      return childCount+= child.sumOfChildrenCount();
    }
    return childCount;
  }, this.children.length);






};


/*
 * Complexity: What is the time complexity of the above functions?
 //.addChild = O(1)
 //.contains = O(n)
 */
