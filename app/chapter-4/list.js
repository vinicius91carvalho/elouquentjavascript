/**
 * Write a function arrayToList that builds up a list structure like the one 
 * shown when given [1, 2, 3] as argument. Also write a listToArray function 
 * that produces an array from a list. Add the helper functions prepend, which 
 * takes an element and a list and creates a new list that adds the element to 
 * the front of the input list, and nth, which takes a list and a number and 
 * returns the element at the given position in the list (with zero referring to 
 * the first element) or undefined when there is no such element. If you haven’t 
 * already, also write a recursive version of nth.
 */

function arrayToList(array) {
    let counter = 0;
    function convert(array, counter) {
        let element = {
            value: array[counter],
            rest: undefined
        };

        if (counter === array.length - 1) {
            return element;
        }

        const lastElement = convert(array, counter + 1);
        element.rest = lastElement;
        return element;
    }
    return convert(array, counter);
}

function listToArray(list) {
    function convert(list, array) {
        array.push(list.value);
        if (!list.rest) {
            return array;
        }
        return convert(list.rest, array);
    }
    return convert(list, []);
}

function prepend(value, list) {
    const element = {
        value,
        rest: list
    };
    return element;
}

function nth(list, index) {
    if (index === 0) {
        return list.value;
    }
    return nth(list.rest, index - 1);
}

console.log(arrayToList([10, 20]));
// → {value: 10, rest: {value: 20, rest: null}}
console.log(listToArray(arrayToList([10, 20, 30])));
// → [10, 20, 30]
console.log(prepend(10, prepend(20, null)));
// → {value: 10, rest: {value: 20, rest: null}}
console.log(nth(arrayToList([10, 20, 30]), 1));
// → 20