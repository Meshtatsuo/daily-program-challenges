/*
Good morning! Here's your coding interview problem for today.
This problem was asked by Yelp.

Given a mapping of digits to letters (as in a phone number), and a digit string, return all possible letters the number could represent. You can assume each valid number in the mapping is a single digit.

For example if {“2”: [“a”, “b”, “c”], 3: [“d”, “e”, “f”], …} then “23”
 should return [“ad”, “ae”, “af”, “bd”, “be”, “bf”, “cd”, “ce”, “cf"].


 Completed, however only works with 2 digits and isn't scalable.

*/

const dict = {
  2: ["a", "b", "c"],
  3: ["d", "e", "f"],
  4: ["g", "h", "i"],
  5: ["j", "k", "l"],
  6: ["m", "n", "o"],
  7: ["p", "q", "r"],
  8: ["s", "t", "u"],
  9: ["w", "x", "y", "z"],
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
  // HASHTAG EFFICIENCY
  else if (inArr.length >= 2) {
    for (i = 0; i <= inArr.length - 1; i++) {
      const currentArr = dict[inArr[i]];
      for (j = i + 1; j <= inArr.length - 1; j++) {
        let newArr = dict[inArr[j]];
        currentArr.forEach((val1) => {
          newArr.forEach((val2) => {
            result.push(val1.concat(val2));
          });
        });
      }
    }
  }
  // Otherwise something is wrong
  else {
    console.log("An error occurred");
  }

  console.log("Result: " + result);
}

Solution("37");
