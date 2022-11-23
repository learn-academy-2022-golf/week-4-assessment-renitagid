// ASSESSMENT 4: JavaScript Coding Practical Questions with Jest

// const { it } = require("node:test");

// const { it } = require("node:test")
// const { describe } = require("yargs")

// const { exportAllDeclaration } = require("@babel/types")
// const { it } = require("node:test")
// const { describe } = require("yargs")

// Please read all questions thoroughly
// Pseudo coding is REQUIRED
// If you get stuck, please leave comments to help us understand your thought process

// Use test driven development to complete the following questions
// Add appropriate dependencies: $ yarn add jest

// Reminder: The test will call your function
// Run the file with the following command: $ yarn jest

// --------------------1) Create a function that takes in an array, removes the first item from the array and shuffles the remaining content.

// a) Create a test with an expect statement using the variable provided.
// HINT: Check out this resource: https://jestjs.io/docs/expect#expectarraycontainingarray

const colors1 = ["purple", "blue", "green", "yellow", "pink"];
// Expected output example (can be a different order): ["yellow", "blue", "pink", "green"]
const colors2 = [
  "chartreuse",
  "indigo",
  "periwinkle",
  "ochre",
  "aquamarine",
  "saffron",
];
//Expected output example (can be a different order): ["saffron", "aquamarine", "periwinkle", "indigo", "ochre"]

describe("removeShuffle", () => {
  const colors1 = ["purple", "blue", "green", "yellow", "pink"];
  const colors2 = [
    "chartreuse",
    "indigo",
    "periwinkle",
    "ochre",
    "aquamarine",
    "saffron",
  ];
  it("takes in an array, removes the first item from the array and shuffles the remaining content.", () => {
    expect(removeShuffle(colors1)).toEqual(
      expect.arrayContaining(["yellow", "blue", "pink", "green"])
    );
    expect(removeShuffle(colors2)).toEqual(
      expect.arrayContaining([
        "saffron",
        "aquamarine",
        "periwinkle",
        "indigo",
        "ochre",
      ])
    );
  });
});
// b) Create the function that makes the test pass.
// First declare a new function named remove Shuffle which takes an array as a parameter
// use the mutator method .shift to remove the first item in thr array
// set up a new array empty array to move random elements into
// set up a while loop that will iterate on the original array as long as it has a length of >0
// use the splice method in addition to math.random to cut out items at a randomly generated index of the first array and move them into the second array.
// splice returns the cutout items as an array. in order to add the items into the new array as strings, I will take the 0 index of the array which will just be the cut out element.
//

const removeShuffle = (array) => {
  array.shift();
  let newArray = [];
  while (array.length > 0) {
    newArray = [
      ...newArray,
      array.splice(Math.floor(Math.random() * array.length), 1)[0],
    ];
  }
  return newArray;
};

//    Test Suites: 1 passed, 1 total
//    Tests:       1 passed, 1 total

//Note: when I comment out the code which removes the first element (shift), it still passes the test. Based on my reading of the arrayContaining documentation, it does not care if there are extra items in the array it receives. I found another way to test if the first item has been cut off and have added it below. I tried to incorporate it within the original test and wasn't able to find the syntax to do so.

test("takes in an array, removes the first item from the array and shuffles the remaining content.", () => {
  expect(removeShuffle(colors1)).not.toContain("purple");
  expect(removeShuffle(colors2)).not.toContain("chartreuse");
});

//
// Test Suites: 1 passed, 1 total
// Tests:       2 passed, 2 total

// --------------------2) Create a function that takes in an object that contains up votes and down votes and returns the end tally.

// a) Create a test with expect statements for each of the variables provided.

// Expected output:
// Expected output: -31

describe("tally", () => {
  const votes1 = { upVotes: 13, downVotes: 2 };
  const votes2 = { upVotes: 2, downVotes: 33 };
  it("takes in an object that contains up votes and down votes and returns the end tally.", () => {
    expect(tally(votes1)).toEqual(11);
    expect(tally(votes2)).toEqual(-31);
  });
});


// b) Create the function that makes the test pass.
// create a function called tally that takes an object as parameters
// access the object values using dot notation
// subtract the second number from the first number
const tally = (object) => object.upVotes - object.downVotes;

// Test Suites: 1 passed, 1 total
// Tests:       3 passed, 3 total

// --------------------3) Create a function that takes in two arrays as arguments and returns one array with no duplicate values. STRETCH: Use the spread operator to pass in a dynamic number of arguments.

// a) Create a test with an expect statement using the variables provided.

describe("combineArrays", () => {
  const dataArray1 = ["array", "object", "number", "string", "Boolean"];
  const dataArray2 = ["string", "null", "Boolean", "string", "undefined"];

  it("takes in two arrays as arguments and returns one array with no duplicate values.", () => {
    expect(combineArrays(dataArray1, dataArray2)).toEqual(["array", "object", "number", "string", "Boolean", "null", "undefined"]);
  });
});



// Expected output: ["array", "object", "number", "string", "Boolean", "null", "undefined"]

// b) Create the function that makes the test pass.
// create a function called combineArrays with a parameter of arrays
//Set up a new array to hold the desired values.
// combine the arrays into a single array using a spread operator, and sort them. This will place any duplicates next to each other in the array, making it possible to check each one to its neighbor.
// for each item in the array, check if its value matches that of the next item. If not (meaning it is not a duplicate) add it to the new array.
// Return the new array

// Another option I considered was to splice off the duplicate from the original array and return it, but it seemed to mess with the logic of iterating through the array when I was splicing items out.


// const combineArrays2 = (a, b) => {
//     newArrA = [...a, ...b].sort();
//     newArrB = []
//     for (let i = 0; i < newArrA.length; i++) {
//       if (newArrA[i] !== newArrA[i+1])
//       newArrB = [...newArrB, newArrA[i]]  
//     }
//     return newArrB
//   }
//   expect(received).toEqual(expected) // deep equality

//   - Expected  - 3
//   + Received  + 3

//     Array [
//   +   "Boolean",
//       "array",
//   -   "object",
//   +   "null",
//       "number",
//   +   "object",
//       "string",
//   -   "Boolean",
//   -   "null",
//       "undefined",
//     ]

//------------This solution works for the prompt as written (does not specify order), but returns the string in a different order than expected, so it does not pass the test. I chose not to use the array contains function from the first challenge, since it defeats the purpose of th prompt, to remove extras.


// I came up with a new solution that will keep the original order. 
// combine the arrays as before. Then create a for loop.
// for each index in the array, check if it is also the last index of that item. 
// as long as that is NOT true, keep splicing off the item at the last index until the first and last index are equal. Then return the array.

const combineArrays = (a, b) => {
    let one = [...a, ...b];
    for (let i = 0; i < one.length; i++) {
      while (i !== one.lastIndexOf(one[i])) {
        one.splice(one.lastIndexOf(one[i]), 1);
      }
    }
    return one;
  };
    
// // 
// Test Suites: 1 passed, 1 total
// Tests:       4 passed, 4 total