/*
Good morning! Here's your coding interview problem for today.
This problem was asked by Yelp.

Given a mapping of digits to letters (as in a phone number), and a digit string, return all possible letters the number could represent. You can assume each valid number in the mapping is a single digit.

For example if {“2”: [“a”, “b”, “c”], 3: [“d”, “e”, “f”], …} then “23”
 should return [“ad”, “ae”, “af”, “bd”, “be”, “bf”, “cd”, “ce”, “cf"].
*/

const dict = {
  2: ["a", "b", "c"],
  3: ["d", "e", "f"],
};

function Solution(input) {
  const inArr = input.split("");

  const result = [];

  // If input only has one value, simply post that values respective array
  if (inArr.length < 2) {
    const result = dict[input[0]];
    console.log("Result: " + result);
  }
  // Else if more than one value, work through scenario
  else if (inArr.length >= 2) {
    for (i = 0; i <= inArr.length - 1; i++) {
      const currentArr = dict[inArr[i]];
      // 
    }
  }
  // Otherwise something is wrong
  else {
    console.log("An error occurred");
  }
}

Solution("23");
