/**
 * Write a function deepEqual that takes two values and returns true only if 
 * they are the same value or are objects with the same properties, where the 
 * values of the properties are equal when compared with a recursive call to 
 * deepEqual.
 */
function deepEqual(left, right) {
    let isEqual = true;
    if (left && typeof left === "object") {
        for (let key of Object.keys(left)) {
            isEqual = deepEqual(left[key], right[key]);
            if (!isEqual) break;
        }
    } else {
        return left === right;
    }
    return isEqual;
}

function deepEqualPerf(left, right) {
    let isEqual = true;

    function findDifferences(left, right) {
        if (!isEqual) return false;
        if (left && typeof left === "object") {
            for (let key of Object.keys(left)) {
                isEqual = findDifferences(left[key], right[key]);
                if (!isEqual) break;
            }
            return isEqual;
        } else {
            return left === right;
        }
    }
    findDifferences(left, right);

    return isEqual;
}

let obj = { here: { is: "an" }, object: 2 };
console.log(deepEqual(obj, obj));
// → true
console.log(deepEqual(obj, { here: 1, object: 2 }));
// → false
console.log(deepEqual(obj, { here: { is: "an" }, object: 2 }));
// → true