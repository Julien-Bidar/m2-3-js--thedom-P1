// Exercise 10
// -------------
//
// Part 1 - Write
// ---------------
// Write a function that accepts a string and returns that string, capitalized.
// e.g. f("hello world"); // Hello World
// e.g. f("BACON BROCOLI"); // Bacon Brocoli

const longestWord = require("./fundamentals-3.9");

function makeIntoTitle(sentence) {
  let phrase = sentence.toLowerCase();
  let arr = phrase.split(" ");
  let newArr = arr.map(element =>{
    return element.charAt(0).toUpperCase() + element.slice(1)
  });
  let result = newArr.join(" ");
  return result;
}

// Part 2 - Test
// --------------
// Test your function.
// Look for the corresponding exercise file in the __tests__ folder.
// Add some test cases in the test. The first one is done for you.

// We need to export the function in order for our unit test to have access to it.
module.exports = makeIntoTitle;
