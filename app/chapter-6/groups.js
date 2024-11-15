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