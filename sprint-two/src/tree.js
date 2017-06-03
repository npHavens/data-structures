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
  // var count = this.children.length;
  // // if(this.children.length){
  // //   count = this.children.length;
  // // }

  // if (count) {
  //   for( var i = 0;  i < this.children.length; i++){
  //     count += this.children[i].sumOfChildrenCount();
  //   }
  // }

  // return count;

};


/*
 * Complexity: What is the time complexity of the above functions?
 //.addChild = O(1)
 //.contains = O(n)
 */
