/**
 * Write a function called countBs that takes a string as its only argument and 
 * returns a number that indicates how many uppercase B characters there are in 
 * the string. Next, write a function called countChar that behaves like 
 * countBs, except it takes a second argument that indicates the character that 
 * is to be counted (rather than counting only uppercase B characters). Rewrite 
 * countBs to make use of this new function.
*/

function countBs(text) {
    return countChar(text, "B");
}

function countChar(text, char) {
    let counter = 0;
    for (let i = 0; i < text.length; i++) {
        if (text[i] === char) {
            counter++;
        }
    }
    return counter;
}

console.log(`countBs("BOB") === 2 ?`, countBs("BOB") === 2);
console.log(`countChar("kakkerlak", "k") === 4 ?`, countChar("kakkerlak", "k") === 4);