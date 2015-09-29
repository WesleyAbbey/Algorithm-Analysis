// Wesley R. Abbey
// April 9, 2015
// Data Structure -> Stack

'use strict';

var linkedList = require('./linkedList.js');

// Initialize Stack
// @Methods:
// .push()
// .pop()
// .isEmpty()
// .peek()
// .print()
// .reset()
// @Properties:
// list
// length
var stack = function() {
  this.list = new linkedList();
  this.length = 0;
};

/* @Function: Push
 *
 * Push data onto the stack
 */
stack.prototype.push = function( data ) {
  this.list.insert( data );
  this.length++;
};

/* @Function: Pop
 *
 * Removes the node from the very top. This is done in a LIFO manner
 * @Return: Node that is removed
 */
stack.prototype.pop = function() {
  if ( this.isEmpty() ) {
    // TODO: Throw error?
    return null; // NOOP
  }
  var result = this.peek();

  var current = this.list.first;

  if ( this.length === 1 ) {
    this.reset();
    return result;
  } else if ( this.length === 2 ) {
    current.next = null;
    this.list.last = current;
  } else {

    while ( current.next.next !== null ) {
      current = current.next;
      this.list.last = current;
    }
    current.next = null;
  }

  this.length--;
  return result;
}

/* @Function: isEmpty
 *
 * This checks to see if the stack is empty or full
 * @Return: Boolean value. True: Empty | False: Not Empty
 */
stack.prototype.isEmpty = function() {
  return (this.length === 0);
};

/* @Function: Peek
 * Return: Simply returns the node that is at the top of the stack.
 */
stack.prototype.peek = function() {
  console.log( '[' + this.list.last.data + ']');
  return this.list.last;
};

/* @Function: Print
 *
 * This function prints out all of the contents of the stack
 */
stack.prototype.print = function() {
  this.list.print();
};

/* @Function: Reset
 *
 * Completely wipes the list and resets the stack
 */
stack.prototype.reset = function() {
  this.list = new linkedList();
  this.length = 0;
};

module.exports = stack;
