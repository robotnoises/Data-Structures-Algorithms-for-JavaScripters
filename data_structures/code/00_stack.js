/**
 * Stack
 * 
 * Visualization:
 * 
 * Imagine a stack of CDs. If you stack-up ten CDs, the first CD you place onto the stack 
 * will be on the bottom and inaccessable, assuming you don't want to knock-over 
 * the rest of the CDs. Conversely, the last CD you placed will be on top. If you wish to access 
 * each CD without knocking-over your stack, you'll need to start at the top (last CD) and
 * work your way down to the bottom (first CD). This is why a Stack is referred to as a 
 * "first-in, last-out" data structure. 
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
 * Note: 
 * 
 * Arrays in JavaScript are essentially Stacks, so this is somewhat superfluous beyond 
 * learning about how to implement a Stack.
 * 
 */

function Stack() {
  this._stack = [];
  this._top = -1;
}

Stack.prototype.push = function (item) {
  if (typeof item === 'undefined') {
    throw new Error('Cannot push undefined onto Stack');
  } else {
    this._top++;
    this._stack[this._top] = item;
  }
};

Stack.prototype.pop = function () {
  if (this.isEmpty()) {
    throw new Error('Cannot pop empty Stack');
  } else {
    var item = this._stack[this._top];
    this._top--;
    return item;  
  }
};

Stack.prototype.peek = function () {
  if (this.isEmpty()) {
    throw new Error('Cannot peek empty Stack');
  } else {
    return this._stack[this._top];
  }
};

Stack.prototype.isEmpty = function () {
  return this._top === -1;
};