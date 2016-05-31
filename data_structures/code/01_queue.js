/**
 * Queue
 * 
 * Visualization:
 * 
 * Much like its namesake, a Queue is basically a line at the Grocery store. Whoever gets
 * in line first will be the first to exit. This is why it is referred to as a "first-in, 
 * first-out" data structure.
 * 
 * Time Complexity:
 * 
 * Worst-case for Insertion & Deletion is constant, O(1)
 * Worst-case for Search & Access is proportional to the size of the Stack, O(n)
 * 
 * Space Complexity:
 * 
 * O(n)
 * 
 */

function Queue() {
  this._queue = [];
  this._front = 0;
}

Queue.prototype.enqueue = function (item) {
  if (typeof item === 'undefined') {
    throw new Error('Cannot enqueue undefined');
  } else {
    this._queue.push(item);
  }
};

Queue.prototype.dequeue = function () {
  if (this.isEmpty()) {
    throw new Error('Cannot dequeue empty Queue');
  } else {
    this._front++;
    return this._queue[(this._front - 1)];
  }
};

Queue.prototype.peek = function () {
  if (this.isEmpty()) { 
    throw new Error('Cannot peek empty Queue');
  } else {
    return this._queue[this._front];
  }
};

Queue.prototype.isEmpty = function () {
  return (this._queue.length - this._front) === 0;
};