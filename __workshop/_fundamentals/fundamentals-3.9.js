// Exercise 9
//
// Part 1 - Write
// ---------------
// Write a function that accepts a string of multiple words and returns the longest word in the string.

// - If the input string is empty then return an empty string.
// - If multiple words have the same length, return the last one.

// Example
//   longestWord("hey hello morning") returns "morning"

// HINTS:
//  - You'll need to use the split string method
//  - `forEach` might be helpful

function longestWord(str) {
  if(str.length === 0){
    return str
  }
  let searchedStr = "";
  const arr = str.split(" ");
  let counter = 0;
  arr.forEach(element => {
    if(element.length > counter){
      counter = element.length;
    }
  });
  const newAr = arr.filter(element =>{
    if(element.length === counter){
      return element;
    }
  });
  if(newAr.length > 1){
    searchedStr = newAr[newAr.length-1];
  } else {
    searchedStr=newAr[0]
  }
  return searchedStr;
}

// Part 2 - Test
// --------------
// Test your function.
// Look for the corresponding exercise file in the __tests__ folder.
// Add some test cases in the test. The first one is done for you.

// We need to export the function in order for our unit test to have access to it.
module.exports = longestWord;
