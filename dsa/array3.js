let myArray = ["apple", "banana", "orange"];
let removedElement = myArray.splice(1, 1, "pear", "watermelon");

console.log(myArray);
console.log(removedElement);

/**

Parameter	        Description

index	            Required.
                    The position to add/remove items.
                    Negative value defines the position from the end of the array.

howmany	            Optional.
                    Number of items to be removed.
                    
item1, ..., 	    Optional.
itemX               New elements(s) to be added.


RETURNED VALUE :
An array containing the removed items (if any).

The splice() method adds and/or removes array elements.
The splice() method overwrites the original array.

*/