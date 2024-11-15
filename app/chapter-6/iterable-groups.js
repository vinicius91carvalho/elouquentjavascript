/* Iterable groups
Make the Group class from the previous exercise iterable. Refer to the section 
about the iterator interface earlier in the chapter if you aren’t clear on the exact 
form of the interface anymore.

If you used an array to represent the group’s members, don’t just return the 
iterator created by calling the Symbol.iterator method on the array. That would work, 
but it defeats the purpose of this exercise.

It is okay if your iterator behaves strangely when the group is modified during iteration. */

class Group {
    #items;

    constructor() {
        this.#items = [];
    }

    static from(array = []) {
        const group = new Group();
        array.forEach(item => group.add(item));
        return group;
    }

    add(item) {
        if (!this.#items.includes(item)) {
            this.#items.push(item);
        }
    }

    has(item) {
        return this.#items.includes(item);
    }

    delete(item) {
        const index = this.#items.indexOf(item);
        this.#items.splice(index, 1);
    }

    [Symbol.iterator] = function () {
        return new GroupIterator(this.#items);
    }
}

class GroupIterator {
    #items;

    constructor(items) {
        this.#items = items;
    }

    next() {
        if (!this.#items || this.#items.length === 0) {
            return { done: true }
        }
        const item = this.#items.shift();
        return { value: item, done: false }
    }

}

let group = Group.from([10, 20]);
console.log(group.has(10));
// → true
console.log(group.has(30));
// → false
group.add(10);
group.delete(10);
console.log(group.has(10));
// → false

for (let value of Group.from(["a", "b", "c"])) {
    console.log(value);
}
// → a
// → b
// → c