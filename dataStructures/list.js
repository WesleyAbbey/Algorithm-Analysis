/* Wesley R. Abbey
 * May 3, 2015
 * Linked List
 *
 * isEmpty
 * push	
 * count
 * peekFirst -> E
 * peekLast -> E
 * pop -> E
 * enqueue
 * dequeue -> E
 * reset
 * print
 * remove
 * contains
 * toArray
 */

'use strict';

/* Initialize a node object
 * @Properties: 
 * data: Data that will be held. It can take the form of any object
 * next: Pointer to the next set of data
 */
var node = function( data ) {
  this.next = node;
  this.data = data;
};

/* Inialize the list object
 * @Properties:
 * first: The first node in the list. Points to another node
 * last:  The last node in the list. Points to null
 * count: The size of the list
 */
var linkedList = function() {
  this.first = null;
  this.last  = null;
  this.count = 0;
};

// @Func: Count -> Int | Size of the list
linkedList.prototype.count = function() { return this.count; };

/* @Func: contains -> Boolean | Whether or not the list contains the data specifiec
 * @Param: Data that will checked
 * @Def: Boolean value will be returned if the specified data is found at all, otherwise it will return false
 */
linkedList.prototype.contains = function( data ) {

};

/* @Func: dequeue -> E | Data from the very front node
 * Def: Return data from the front node and remove the front node from the list
 */
linkedList.prototype.dequeue = function() {
  
  if ( this.isEmpty() ) {
	return null
  } else {
    var ret = this.peekFirst();
    if ( this.count == 1 ) {
      this.reset();
    } else {
      this.first = this.first.next;
      this.count--;
    }
  }

  return ret;
};

/* @Func: enqueue( E )
 * @Param: Data that is being enqueued to the beginning of the list
 * @Def: Enqueues data to the front of the list
 */
linkedList.prototype.enqueue = function(data) {
  var tempNode = new node(data);

  if (this.count == 0) {
    this.last  = tempNode;
  } else {
    tempNode.next = this.first;
  }

  this.first = tempNode;
  this.count++;
};

// @Func: isEmpty -> Boolean | Empty List Indicator
linkedList.prototype.isEmpty = function() {
  return this.count == 0 ? true : false;
};

/* @Func: peekFirst -> E | Data from first node in the front of the list
 * @Def: Returns the value of the node that is located in the front of the list. Nothing is altered in the list
 */
linkedList.prototype.peekFirst = function() {
  return this.first.data;
};

/* @Func: peekLast -> [E] | Data from the last node on the top of the list
 * @Def: Returns the value the node that is located in the top of the list. Nothing is altered in the list
 */
linkedList.prototype.peekLast = function() {
  return this.last.data;
};

/* @Func: pop -> E | Data from the last node on the top of the list
 * @Def: Returns the data from the node at the very top of the stack.
 * It will also remove the very top element from the list and return the data that was in the removed node
 */// TODO:FIX THIS SHIT
linkedList.prototype.pop = function() {
  
  // Write removal code and then call that function instead of writing more code


  if ( this.isEmpty() ) {
  	return null;
  } else {

  	// Get the return value first
  	var ret = this.peekLast();
  	// Keep track of the current node
    var cur = this.first;
    // Keep track of the previous node. This will be converted to the last node once the list has been traversed
    var prev= null;

    if (this.count == 1) {
      this.reset();
    } else {

      while (cur.next != null) {
      	prev = cur;
      	cur = cur.next;
      }
	  
	  prev.next = null;
	  this.last = prev;
	  this.count--;
	}
  }

  return ret;
};

/* @Func: push( E ) 
 * @Param: Data that is being pushed onto the list
 * @Def: Pushes data on top of the list stack
 */
linkedList.prototype.push = function( data ) {

  var tempNode = new node(data);

  if (this.count == 0 ){
    this.first = tempNode;
  } else {
    this.last.next = tempNode;
  }

  this.last = tempNode;
  this.count++;

};

/* @Func: print
 * @Def: Prints the contents of the list
 */
linkedList.prototype.print = function() {
  if ( !this.isEmpty() ) {
    var cur = this.first;

    while ( cur.next != null) {
      console.log( cur.data );
      cur = cur.next;
    }
  }
};

/* @Func: Remove
 * @Param: Data that will be removed
 * @Def: Takes in data to search for and remove from the linked list
 * When there are duplicates only the first encountered datum is removed.
 * If the data does not exist, nothing will happen
 */
linkedList.prototype.remove = function( data ) {


  this.count--;
};

/* @Func: reset
 * @Def: Reset the linked list as a new empty linkedList
 */
linkedList.prototype.reset = function() {
  this.first = null;
  this.first.next = null;
  this.last  = null;
  this.count = 0;
};

/* @Func: toArray -> [E] | Array of list dataa
 * @Def: Returns an array of the current list
 *///TODO: Why does this give a wrong value?
linkedList.prototype.toArray = function() {
  if ( this.isEmpty() ) {
  	return null;
  } else {

    var array = [];
    var cur = this.first;
    array.push(cur.data);

    while (cur.next != null){
      cur = cur.next;
      array.push(cur.data);
    }
  }

  return array;

};

module.exports = linkedList;
