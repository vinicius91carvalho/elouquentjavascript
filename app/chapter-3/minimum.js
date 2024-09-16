/*
The previous chapter introduced the standard function Math.min that returns 
its smallest argument. We can write a function like that ourselves now. 
Define the function min that takes two arguments and returns their minimum.
*/

function min(a, b) {
    return a < b ? a : b;
}

console.log(`(min(5, 7) === 7 ? ${min(5, 7) === 5}`);
console.log(`(min(-50, 0) === 7 ? ${min(-50, 0) === -50}`);
console.log(`(min(0, -Infinity) === 7 ? ${min(0, -Infinity) === -Infinity}`);