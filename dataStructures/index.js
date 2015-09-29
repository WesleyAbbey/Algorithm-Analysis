// Wesley R. Abbey
// April 9, 2015
// Testing Scripts

// So Far: 
// - Unweighted-Matrix Graph works and creates arbitrary number of graphs and vertices.

'use strict';

var linkedList = require('./list.js');

var list = new linkedList();

list.push(1);
list.push(2);
list.push(3);
list.push(4);
list.push(5);
list.enqueue(-1);
list.enqueue(-2);
list.enqueue(-3);
list.enqueue(-4);
list.enqueue(-5);
console.log(list.count);
list.pop();
list.dequeue();
list.pop();
console.log(list.count);

var ar = list.toArray();
console.log(ar);

list.print();







// var LOW = 100;
// var MED = 500;
// var HIG = 1000;

// var mGraph = require('../algorithms/unweightedMatrixBFS.js');
// var lgraph = require('../algorithms/unweightedListBFS.js');


// // Testing
// ///***********************************************************
// var startM = new Date();
// var startMatrixTime = startM.getTime();
// var matrixGraph = new mGraph();

// // comment out specific graph types you would like to create
// //matrixGraph.generateRandomGraph(LOW);
// matrixGraph.generateSparseGraph(HIG);
// //matrixGraph.generateDenseGraph(LOW);
// var bfsMTime = matrixGraph.breadthFirstSearch(1);

// var endM = new Date();
// var endMatrixTime = endM.getTime();
// var totalTime = endMatrixTime - startMatrixTime; // milliseconds it takes to create a graph and run BFS
// matrixGraph.print();
// ///

// ///
// var startL = new Date();
// var startListTime = startL.getTime();
// var listGraph = new lgraph();

// // comment out specific graph types you would like to create
// //listGraph.generateRandomGraph(LOW);
// listGraph.generateSparseGraph(HIG);
// //listGraph.generateDenseGraph(LOW);
// var bfsLTime = listGraph.breadthFirstSearch(1);

// var endL = new Date();
// var endListTime = endL.getTime();
// var listTotalTime = endListTime - startListTime;
// listGraph.print();
// ///***********************************************************



// // Print Results
// console.log('Total Time to create and run BFS was ' + totalTime + 'ms MATRIX');
// console.log('Total Time to create and run BFS was ' + listTotalTime + 'ms LIST');
// console.log('Matrix     BFS computation time was ~' + bfsMTime + 'ms');
// console.log('LinkedList BFS computation time was ~' + bfsLTime + 'ms');
// // Professor Guo is the coolest! :)
