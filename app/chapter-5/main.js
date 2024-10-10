const SCRIPTS = require('./scripts.js');

function characterCount(script) {
    return script.ranges.reduce((count, [from, to]) => {
        return count + (to - from);
    }, 0);
}

(function main() {
    console.log(SCRIPTS.reduce((a, b) => {
        return characterCount(a) < characterCount(b) ? b : a;
    }));
})();

