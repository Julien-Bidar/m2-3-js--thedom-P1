// We import (require) the function that we want to test.
const sum = require("../fundamentals-3.4");

// Write 3 more expect functions to test the function you just wrote.
test("Exercise 4", () => {
  expect(sum([3, 4, 5])).toBe(12);
  expect(sum([3, "4", 5])).toBe(undefined);
  expect(sum([3, 4, 5, 5])).toBe(17);
  expect(sum([2])).toBe(2);
  // add more tests here...
});

// More info on jest expect: https://jestjs.io/docs/en/expect
