/**
 * Stack
 * 
 * Visualization:
 * 
 * Imagine a stack of CDs. If you stack-up ten CDs, the first CD on the stack 
 * will be on the bottom and inaccessable, assuming you don't want to knock-over 
 * the rest of the CDs. Conversely, the last CD will be on top. If you wish to access 
 * each CD without knocking-over your stack, you'll need to start at the top (last CD) and
 * work your way down to the bottom (first CD). This is why a Stack is referred to as a 
 * "first-in, last-out" Data Structure. 
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
 */

function Stack() {
  
  this.stack = [];
  this.top = -1;
  
  this.increment = function () {
    this.top++;
  };
  
  this.decrement = function () {
    if (this.top > -1) {
      this.top--;  
    }
  };
}

Stack.prototype.push = function (item) {
  if (item) {
    this.increment();
    this.stack[this.top] = item;  
  } else {
    throw new Error('Cannot push undefined onto Stack'); 
  }
};

Stack.prototype.pop = function () {
  if (this.isEmpty()) {
    throw new Error('Cannot pop empty Stack');
  } else {
    var item = this.stack[this.top];
    this.decrement();
    return item;  
  }
};

Stack.prototype.peek = function () {
  if (this.isEmpty()) {
    throw new Error('Cannot peek empty Stack');
  } else {
    return this.stack[this.top];
  }
};

Stack.prototype.isEmpty = function () {
  return this.top === -1;
};