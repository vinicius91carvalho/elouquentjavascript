/**
 * Write a range function that takes two arguments, start and end, and returns an array containing all the numbers from start up to and including end.

Next, write a sum function that takes an array of numbers and returns the sum of these numbers. Run the example program and see whether it does indeed return 55.

As a bonus assignment, modify your range function to take an optional third argument that indicates the “step” value used when building the array. If no step is given, the elements should go up by increments of one, corresponding to the old behavior. The function call range(1, 10, 2) should return [1, 3, 5, 7, 9]. Make sure this also works with negative step values so that range(5, 2, -1) produces [5, 4, 3, 2].

// Your code here.

console.log(range(1, 10));
// → [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
console.log(range(5, 2, -1));
// → [5, 4, 3, 2]
console.log(sum(range(1, 10)));
// → 55
 */
function range(start, end, step = 1) {
    const arr = [];
    const condition = signal(start, end);
    for (let i = start; condition(i, end); i += step) {
        arr.push(i);
    }
    return arr;
}

function signal(start, end) {
    let isAsc = true;
    if (start > end) {
        isAsc = false;
    }
    return (counter, final) => {
        if (isAsc) {
            return counter <= final
        } else {
            return counter >= final
        }
    }
}

function sum(numbers, ...others) {
    numbers = Array.isArray(numbers) ? numbers : [numbers, ...others];
    return numbers.reduce((prev, curr) => prev + curr, 0);
}


console.log(range(1, 10));
// → [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
console.log(range(5, 2, -1));
// → [5, 4, 3, 2]
console.log(sum(range(1, 10)));
// → 55
console.log(sum(1, 10));
// → 11