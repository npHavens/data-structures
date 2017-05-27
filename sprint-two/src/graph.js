

// Instantiate a new graph
var Graph = function() {
};

var Child = function(val){
this.value = val;
this.edge =  {};
};

// Add a node to the graph, passing in the node's value.
Graph.prototype.addNode = function(node) {
  this[node] = new Child(node);
};

// Return a boolean value indicating if the value passed to contains is represented in the graph.
Graph.prototype.contains = function(node) {
  if(this[node] === undefined){
    return false;
  }

  if(this[node].value === node){
    return true;
  }

  return false;
};

// Removes a node from the graph.

Graph.prototype.removeNode = function(node) {
  for(var key in this[node].edge){
    delete this[key].edge[node];
  }
  delete this[node];
};

// Returns a boolean indicating whether two specified nodes are connected.  Pass in the values contained in each of the two nodes.
Graph.prototype.hasEdge = function(fromNode, toNode) {
  if(this[fromNode].edge[toNode] === true){
    return true;
  }
  return false;

}


// Connects two nodes in a graph by adding an edge between them.
Graph.prototype.addEdge = function(fromNode, toNode) {
  this[fromNode].edge[toNode] = true;
  this[toNode].edge[fromNode] = true;
};

// Remove an edge between any two specified (by value) nodes.
Graph.prototype.removeEdge = function(fromNode, toNode) {
  delete this[fromNode].edge[toNode];
  delete this[toNode].edge[fromNode];

};

// Pass in a callback which will be executed on each node of the graph.
Graph.prototype.forEachNode = function(cb) {

  for( var children in this){
    console.log(this[children])
    cb(this[children]);
  }
};

/*
 * Complexity: What is the time complexity of the above functions?
 */


