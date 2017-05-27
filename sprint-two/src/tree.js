var Tree = function(value) {
  var newTree = {};
  newTree.value = value;

  // your code here
  newTree.children = [];  // fix me
  _.extend(newTree, treeMethods);
  return newTree;
};

var treeMethods = {};

treeMethods.addChild = function(value) {
  this.children.push(Tree(value));
};

treeMethods.contains = function(target) {

  var traverse = function (tree){
    if(tree.value === target) {
      return true;
    }
    if(tree.children.length){
      for (var i = 0; i < tree.children.length; i++){
        if (traverse(tree.children[i])) {
          return true;
        }
      }
    }
    return false;
  };

  return traverse(this);
};



/*
 * Complexity: What is the time complexity of the above functions?
 //.addChild = O(1)
 //.contains = O(n)
 */
