class List {
    constructor(value, rest) {
        this.value = value;
        this.rest = rest;
    }

    get length() {
        return 1 + (this.rest ? this.rest.length : 0);
    }

    static fromArray(array) {
        let result = null;
        for (let i = array.length - 1; i >= 0; i--) {
            result = new this(array[i], result);
        }
        return result;
    }
}

class ListIterator {
    constructor(list) {
        this.list = list;
    }

    next() {
        if (this.list == null) {
            return { done: true };
        }
        let value = this.list.value;
        this.list = this.list.rest;
        return { value, done: false };
    }
}

List.prototype[Symbol.iterator] = function () {
    return new ListIterator(this);
}

let list = List.fromArray([1, 2, 3]);
for (let element of list) {
    console.log(element);
}

class LengthList extends List {
    #length;

    constructor(value, rest) {
        super(value, rest);
        this.#length = super.length;
    }

    get length() {
        return this.#length;
    }
}

console.log(LengthList.fromArray([1, 2, 3]).length); // 3

console.log(
    new LengthList(1, null) instanceof LengthList);
// → true
console.log(new LengthList(2, null) instanceof List);
// → true
console.log(new List(3, null) instanceof LengthList);
// → false
console.log([1] instanceof Array);
// → true