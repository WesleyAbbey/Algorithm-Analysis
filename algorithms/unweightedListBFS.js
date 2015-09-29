// Wesley R. Abbey
// April 23, 2015
// Data Structure -> Unweighted Graph with Linked Lists

'use strict';

var linkedList = require('../dataStructures/linkedList.js')
var queue = require('../dataStructures/queue.js');

// Initialize Graph
var graph = function( num ) {

    this.vertices = new queue();
  	this.size = 0;
  	this.root = 0;
  	var vert;

  	// Initialized graph of a specific size will be set to a new graph of specified size.
  	// All vertices are automatically named by their number
  	if ( typeof num != 'undefined' ) {
    	this.size = num;
    	for (var i = 1; i < (num + 1); i++){
      		vert = new vertex( i );
      		this.vertices.enqueue( vert );
    	}
  	}
};

// Initialize Vertex Object
var vertex = function( data ) {

	// @Properties
  	this.id = data; // Vertex Number
  	this.visited = false;
  	this.distance = Infinity;
  	// TODO: Recreate the parent as a vertex datatype instead, or rewrite code for parent creation
  	this.parent = new linkedList();
  	// All adjacent nodes. These have connected edges.
  	this.adjacent = new linkedList();

};


/* @Function: Breadth First Search
 * 
 * Alter the distances of every vertex when given a source node.
 * Execute Breadth First Search across all vertices.
 * Return nothing.
 * TODO: Create system for finding the distance between two specific vertices instead of simply running the algorithm.
 */
graph.prototype.breadthFirstSearch = function( source ) {
    var d = new Date();
    var st = d.getTime();
	// source node
	var s;

  	if (typeof source == 'number') {
  		s = this.getVertex(source);
  	} else {
  		console.log('ERROR -> You must enter a a valid vertex number.');
    	return undefined;
  	}

  	var current = this.vertices.peek();

  	// Initialize everything to blank sets so we can do accurate work on all data.
  	for (; current != null; current = current.next) {
  		current.data.visited = false;
  		current.data.distance = Infinity;
  		current.data.parent = new linkedList();
  	}

	var q = new queue();
	var temp;
	var v;
	var u;
	s.distance = 0;
	s.visited = true;
	q.enqueue(s);


  	while ( !q.isEmpty() ) {
	  	// for every adjacent node to q. 
	  	// mark as visited. increment distance. enqueue to q. mark parent.

	  	u = q.dequeue().data;

	  	temp = u.adjacent.first;

	  	// for every adjacent node
	  	for (; temp != null; temp = temp.next) {

	  		if (temp != null) {
	  			v = this.getVertex(temp.data.id);
	  		} else {
	  			console.log('V WAS NULL VALUE');
	  			continue;
	  		}

	  		if (!v.visited) {
	  			v.visited = true;
	  			v.distance = u.distance + 1;
	  			v.parent = u;
	  			q.enqueue(v);
	  		}
	  	}
    }

    var d2 = new Date();
    var ft = d2.getTime();
    var finalTime = ft - st;
    return finalTime;
    // Debugging: Print out the finished results
    // var cur = this.vertices.peek();

    // for (; cur != null; cur = cur.next) {
    // 	console.log(cur.data);
    // }

};


/* @Function: Get Vertex
 * 
 * Return the specified vertex given specific ID. Data must be the ID of the vertex.
 * ID is a number
 */
graph.prototype.getVertex = function( data ) {

  if (typeof data != 'number') {
    console.log('ERROR -> Data entered was invalid. Vertext failed to be acquired');
    return undefined;
  }

  var current = this.vertices.peek();

  // return the vertex
  for (; current != null; current = current.next) {
  	if (current.data.id == data) {
  		return current.data;
  	}
  }
  return undefined;
};


/* @Function: Add Edge
 *
 * This will create a new edge within the graph between two nodes which are
 * the parameters.
 */
graph.prototype.addEdge = function( origin, source ) {
  if (origin < 0
    || source < 0
    || origin > this.size
    || source > this.size
    || typeof origin != 'number'
    || typeof source != 'number') {
    // One of the numbers is invalid. NOOP
    console.log('ERROR -> Invalid Edge creation');
    return;
  }

  var current = this.vertices.peek();
  var sourceNode = current;

  // Loop through the list of vertices and check the id of each vertex against the origin.
  // Once it's been found you've found the correct vertex.
  for (; current.data.id != origin; current = current.next) {
 	// NOOP. Just find the correct node
  }
  for (;sourceNode.data.id != source; sourceNode = sourceNode.next) {
  	// NOOP. Just find the correct node
  }

  // check to see if the node is already in the list.
  // If the node exists return.
  if (current.data.adjacent.exists(sourceNode.data)) {
  	return;
  }

  // console.log(current.data.id + ' will have an adjacent node -> ' + sourceNode.data.id);
  // add new node to the adjacency list of the vertex.
  current.data.adjacent.insert(sourceNode.data);

};




graph.prototype.generateRandomGraph = function( size ) {

  this.size = size;
  this.vertices = new queue();
  this.root = 1;
  var vert;


  for (var i = 1; i < (this.size + 1); i++){
    vert = new vertex( i );
    this.vertices.enqueue( vert );
  }

  var numberOfEdges = Math.floor(this.size * (this.size/4));

  // determine the power of the number to be determined
  var power = Math.pow(10, (Math.ceil( Math.log(numberOfEdges)/Math.log(10) )) );
  var source;
  var destination;

  for (var i = 0; i < numberOfEdges; i++) {

    source      = (Math.floor((Math.random() * power)) % this.size) + 1;
    destination = (Math.floor((Math.random() * power)) % this.size) + 1;
    this.addEdge(source, destination);
  }

};


graph.prototype.generateDenseGraph = function( size ) {

  this.size = size;
  this.vertices = new queue();
  this.root = 1;
  var vert;

  for (var i = 1; i < (this.size + 1); i++){
    vert = new vertex( i );
    this.vertices.enqueue( vert );
  }

  for (var i = 1; i <= size; i++) {
    for (var j = 1; j <= size; j++) {
      this.addEdge(i, j);
    }
  }

};

graph.prototype.generateSparseGraph = function( size ) {

  this.size = size;
  this.vertices = new queue();
  this.root = 1;
  var vert;

  for (var i = 1; i < (this.size + 1); i++){
    vert = new vertex( i );
    this.vertices.enqueue( vert );
  }

  for (var i = 1; i < this.size; i++) {
    this.addEdge(i, i+1);
  }

};

/* @Function: Print
 *
 * Prints out the contents of the graph in an adjacency matrix
 */
graph.prototype.print = function() {
  
  var current = this.vertices.peek();
  var adjacentVertices = '';

  for (; current != null; current = current.next) {
  	// Create the string for adjacent vertices
  	for (var i = current.data.adjacent.first; i != null; i = i.next) {
  		adjacentVertices += (i.data.id + ' ');
  	}
  	// Print out the line for the current node and it's adjacent vertices
  	console.log(current.data.id + ': ' + adjacentVertices);
  	adjacentVertices = '';
  }

};


module.exports = graph;
// TODO: Add Function 'addNode'
