// Wesley R. Abbey
// April 9, 2015
// Data Structure -> Linked List

'use strict';

// Create a node.
//
// Method:
// .next -> pointer to a another node
// Property:
// data -> specific node's corresponding data
var node = function( data ) {
  this.data = data;
  this.next = null;
};

// Initialize new linked list
var linkedList = function() {
  this.length = 0;
  this.first  = null;
  this.last   = null;
};

/* @Function: Insert
 *
 * Insert new data into the linkedList
 */
linkedList.prototype.insert = function( data ) {

  if ( data == 'undefined' ) {
    throw new Error( 'ERROR -> Data is undefined. ' );
  }

  var newNode = new node(data);

  // if the linkedList is empty set the newNode to both first and last values
  if ( this.length === 0 ) {
    this.first = newNode;
  } else {
    this.last.next = newNode;
  }

  // set the last node and increment the length
  this.last = newNode;
  this.length++;

};


/* @Function: Delete
 *
 * Find and delete specified data. If the data is not available then return
 * nothing and do NOOP. Else delete the data and decrement the length.
 */
linkedList.prototype.delete = function( data ) {

  // If the length is 0 the list is empty
  if ( this.length === 0 ) { return };

  if ( data == 'undefined' ) {
    throw new Error( 'ERROR -> Data is undefined.' );
  }

  var temp = this.first;
  var previous = null;

  while ( temp != null ) {

    if ( temp.data === data ) {

      // If the data is equal to the very first value, we'll do a slightly
      // different rearangement
      if ( data === this.first.data ) {
        this.first = this.first.next;
        this.length--;
        break;
      } else {
        previous.next = temp.next;
        this.length--;
        break;
      }

    } else {
      previous = temp;
      temp = temp.next;
    }
  }
  // If this point is reached no value has been found to be deleted.
};

/* @Function: Print
 *
 * Prints out all of the data within the list.
 */
linkedList.prototype.print = function() {
  if ( this.length === 0 ) {
    console.log('[EMPTY]');
  } else {
    var node = this.first;

    while ( node !== null ) {
      console.log( node.data );
      node = node.next;
    }
  }
};

linkedList.prototype.exists = function( data ) {

  var current = this.first;
  
  for (; current != null; current = current.next) {
    if (current.data == data) {
      return true;
    }
  }

  return false;

};

// Export the linkedList data structure to be used.
module.exports = linkedList;
