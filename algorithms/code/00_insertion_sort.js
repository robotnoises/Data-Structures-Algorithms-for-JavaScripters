/**
 * Insertion sort
 * 
 * Best for sorting small or mostly-sorted sets of data. 
 * 
 * Visualization:
 * 
 * You have five playing cards: 5, 2, 1, 7, 9. You want to sort them in ascending order.
 * Imagine they are laying face-up on a table. Now, for each card in your hand (moving left-to-right) 
 * do the following:
 * 
 * 1) Select a card. Slide it up so that it is no longer in the row of cards.
 * 2) Compare the card to its neighbor to the left (if there is one)
 * 3) If the neighbor card is higher than the selected card, shift the neighbor to the right and repeat
 *    step (2) using the next neighbor to the left.
 * 4) Insert the original selected card into the empty space in the row of cards.
 * 
 * By using this pattern, all of the cards to the left of the selected card will be sorted. Your goal is simply
 * to traverse backward through the previously sorted cards and insert the selected card when you "run into" a
 * card that is lower or equal.
 * 
 * Time Complexity:
 * 
 * Worst-case is O(n^2).
 * 
 * Space Complexity:
 * 
 * Worst-case is O(1), as it does not require additional space to sort an array.
 * 
 */

function insertion_sort(array) {
  
  var i, j, key, limit;
  
  for (i = 0, limit = array.length; i < limit; i++) {

    // grab the current key
    key = array[i];
    
    // Compare the current key to the sorted items to its left. If the key
    // is less than the index value, shift it to the right by one.
    for (j = (i - 1); j >= 0 && (array[j] > key); j--) {
      // Shift it to the right
      array[j + 1] = array[j];
    }
    
    // Once we've finished shifting, insert the key
    array[j + 1] = key;
  }
}