/**
 * Insertion sort
 * 
 * Best for sorting small or mostly-sorted sets of data. 
 * 
 * Time Complexity:
 * 
 * Worst-case is O(n^2).
 * 
 * Space Complexity:
 * 
 * Worst-case is O(1), as it does not require additional space to sort an array.
 */

function insertion_sort(array) {
  
  var i, j, key, limit;
  
  for (i = 0, limit = array.length; i < limit; i++) {
    
    // grab the current key
    key = array[i];
    
    // Compare the current key to the items to its left in the array,
    // if the key is less than the index value, shift it to the right by one.
    for (j = (i - 1); j >= 0 && (array[j] > key); j--) {
      // Shift it to the right
      array[j + 1] = array[j];
    }
    
    // Once we've finished shifting, insert the key
    array[j + 1] = key;
  }
}