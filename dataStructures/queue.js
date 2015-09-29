// Wesley R. Abbey
// April 9, 2015
// Data Structure -> Queue

'use strict';

var linkedList = require('./linkedList.js');

// Initialize Queue
// @Methods:
// .enqueue()
// .dequeue()
// .isEmpty()
// .peek()
// .print()
// .reset()
// @Properties:
// list
// length
var queue = function() {
  this.list = new linkedList();
  this.length = 0;
};

/* @Function: Enqueue
 *
 * Push data onto the list
 */
queue.prototype.enqueue = function( data ) {
  this.list.insert( data );
  this.length++;
};

/* @Function: Dequeue
 *
 * Removes the node from the very front. This is done in a FIFO manner
 * @Return: Node that is removed
 */
queue.prototype.dequeue = function() {
  if ( this.isEmpty() ) {
    // TODO: Throw error?
    return null; // NOOP
  }

  var result = this.peek();
  this.list.delete( this.list.first.data );
  this.length--;
  return result;
};

/* @Function: isEmpty
 *
 * This checks to see if the queue is empty or full
 * @Return: Boolean value. True: Empty | False: Not Empty
 */
queue.prototype.isEmpty = function() {
  return (this.length === 0);
};

/* @Function: Peek
 * Return: Simply returns the node that is at the front of the queue.
 */
queue.prototype.peek = function() {
  // console.log( '[' + this.list.first.data + ']' );
  return this.list.first;
};

/* @Function: Print
 *
 * This function prints out all of the contents of the queue
 */
queue.prototype.print = function() {
  this.list.print();
};

/* @Function: Reset
 *
 * Completely wipes the list and resets the Queue
 */
queue.prototype.reset = function() {
  this.list = new linkedList();
  this.length = 0;
};

module.exports = queue;
