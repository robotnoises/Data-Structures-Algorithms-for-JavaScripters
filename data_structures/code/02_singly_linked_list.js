/**
 * Singly-linked list
 */

function SinglyLinkedList() {
  this._head = null;
  this._tail = null;
  this._Node = function (data) {
    if (data) {
      this._node = data;
      this._next = null;  
    } else {
      // throw error
    }
  };
  
  this.length = 0;
}

SinglyLinkedList.prototype.add = function (node) {
  
  var nodeToAdd = new this._Node(node);
  
  if (!this._head) {
    this._head = nodeToAdd;
    this._tail = nodeToAdd;
  } else {
    this._tail._next = nodeToAdd;
    this._tail = nodeToAdd;
  }
  
  this.length++;
};