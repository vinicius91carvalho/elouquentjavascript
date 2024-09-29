/**
 * Arrays have a reverse method that changes the array by inverting the order 
 * in which its elements appear. For this exercise, write two functions, 
 * reverseArray and reverseArrayInPlace. The first, reverseArray, should take 
 * an array as its argument and produce a new array that has the same elements 
 * in the inverse order. The second, reverseArrayInPlace, should do what the 
 * reverse method does: modify the array given as its argument by reversing its 
 * elements. Neither may use the standard reverse method.
 * Thinking back to the notes about side effects and pure functions in the 
 * previous chapter, which variant do you expect to be useful in more 
 * situations? Which one runs faster?
 */
function reverseArray(array) {
    let newArray = [];
    for (let i = array.length - 1; i >= 0; i--) {
        newArray.push(array[i]);
    }
    return newArray;
}

function reverseArrayInPlace(array) {
    let i = 0;
    for (let j = array.length - 1; i < j; j--, i++) {
        let end = array[j];
        array[j] = array[i];
        array[i] = end;
    }
}

let myArray = ["A", "B", "C"];
console.log(reverseArray(myArray));
// → ["C", "B", "A"];
console.log(myArray);
// → ["A", "B", "C"];
let arrayValue = [1, 2, 3, 4, 5];
reverseArrayInPlace(arrayValue);
console.log(arrayValue);
// → [5, 4, 3, 2, 1]
