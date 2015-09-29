// Wesley R. Abbey
// April 9, 2015
// Data Structure -> Unweighted Graph with Adjacency Matrix

'use strict';

var linkedList = require('../dataStructures/linkedList.js')
var queue = require('../dataStructures/queue.js');

// Initialize Graph
var graph = function( num ) {

  this.vertices = new queue();
  this.size = 0;
  this.root = 0;
  var vert;

  if ( typeof num != 'undefined' ) {
    this.size = num;
    for (var i = 1; i < (num + 1); i++){
      vert = new vertex( i );
      this.vertices.enqueue( vert );
    }
  }

  this.adjacencyMatrix = this.createMatrix( this.size );
};


/* @Function: Create Matrix
 *
 * Return: An empty 2D Array of a specified size. This is a matrix of values
 */
graph.prototype.createMatrix = function( size ) {

  var newGraph = [];

  for (var i = 0; i < size; i++) {
    newGraph[i] = [];
    for (var j = 0; j < size; j++) {
      newGraph[i][j] = 0;
    }
  }

  return newGraph;
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

  // If an edge already exists, nothing will happen
  this.adjacencyMatrix[origin-1][source-1] = 1;
};

/* @Function: Print
 *
 * Prints out the contents of the graph in an adjacency matrix
 */
graph.prototype.print = function() {

  var row = '';
  console.log('MATRIX OF SIZE [' + this.size + ']:');
  console.log('1 2 3 4 5 6 7 8 9 10 . . .');
  for (var i = 0; i < this.size; i++) {
    for (var j = 0; j < this.size; j++) {
      row += this.adjacencyMatrix[i][j] + ' ';
    }
    console.log(row);
    row = '';

  }
};


/* @Function: Breadth First Search
 * 
 * Alter the distances of every vertex when given a source node.
 * Execute Breadth First Search across all vertices.
 * Return nothing.
 * TODO: Create system for finding the distance between two specific vertices instead of simply running the algorithm.
 */
graph.prototype.breadthFirstSearch = function(source) {

  var d = new Date();
  var st = d.getTime();
  
  var s;

  if ( typeof source == 'number') {
    s = this.getVertex(source);
  } else {
    console.log('ERROR -> You must enter a a valid vertex number.');
    return;
  }

  var numVertex = this.vertices.length;

  // initialize all vertices to initial values in order to ascertain accurate data
  for ( var v = this.vertices.peek(); v.next != null; v = v.next ) {
    v.distance = Infinity;
    v.visited = false;
    v.parent = new linkedList();
  }

  var level; 
  var v;
  var u;
  var q = new queue();
  s.distance = 0;
  s.visited = true;
  q.enqueue(s);

  while ( !q.isEmpty() ) {
    u = q.dequeue().data;
    level = u.id - 1;

    // For each adjacent node do work
    for (var i = 0; i < this.size; i++) {
      if (this.adjacencyMatrix[level][i] === 1) {
        v = this.getVertex( i+1 );
        if ( !v.visited ){
          v.distance = u.distance + 1;
          v.parent = u;
          v.visited = true;
          q.enqueue(v);
        }
      }
    }
  }
  var d2 = new Date();
  var ft = d2.getTime();
  var finalTime = ft - st;
  return finalTime;
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

  for (; current != null; current = current.next) {

    if (current.data.id == data) {
      return current.data;
    }
  }
  console.log('ERROR -> Number entered was out of scope.');
  return undefined;

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


  this.adjacencyMatrix = this.createMatrix( this.size );

  // Generate arbitrary random edges
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
  // generate edge from each node to every other node.
  this.size = size;
  this.vertices = new queue();
  this.root = 1;
  var vert;

  this.adjacencyMatrix = this.createMatrix( this.size );

  for (var i = 1; i <= this.size; i++){
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

  this.adjacencyMatrix = this.createMatrix( this.size );

  for (var i = 1; i <= this.size; i++){
    vert = new vertex( i );
    this.vertices.enqueue( vert );
  }

  for (var i = 1; i < this.size; i++) {
    this.addEdge(i, i+1);
  }
};


// Initialize Vertex Object
var vertex = function( data ) {
  this.id = data;
  this.distance = Infinity;
  this.parent = new linkedList();
  this.visited = false;
};

module.exports = graph;


//TODO: Add Function 'addNode'