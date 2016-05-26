/**
 * Queue
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