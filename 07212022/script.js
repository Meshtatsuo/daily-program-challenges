/*

Good morning! Here's your coding interview problem for today.
This problem was asked by Microsoft.
Compute the running median of a sequence of numbers. That is, given a stream of numbers, print out the median of the list so far on each new element.
Recall that the median of an even-numbered list is the average of the two middle numbers.
For example, given the sequence [2, 1, 5, 7, 2, 0, 5], your algorithm should print out:

2
1.5
2
3.5
2
2
2

*/

function main(input) {
  const stream = input.split("");
  let progressArr = [];
  for (i = 0; i <= stream.length - 1; i++) {
    progressArr.push(stream[i]);
    let median;
    if (i === 0) {
    } else if (i === 1) {
      median = (progressArr[0] + progressArr[i]) / 2;
      console.log(median);
    }
    // otherwise figure out if even or odd and find median from there
    else {
      progressArr.sort();
      const midIndex = Math.floor(progressArr.length / 2);
      if (progressArr.length % 2 !== 0) {
        median = progressArr[midIndex];
        console.log(parseInt(median));
      } else {
        median =
          (parseInt(progressArr[midIndex]) +
            parseInt(progressArr[midIndex + 1])) /
          2;
        console.log(median);
      }
    }
  }
}

main("2157205");
