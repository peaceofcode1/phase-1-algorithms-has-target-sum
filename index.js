function hasTargetSum(array, target) {
  // Write your algorithm here
}

/* 
  Write the Big O time complexity of your function here
  
*/
function hasTargetSum(array, target) {
  const visitedNumbers = {};

  for (let i = 0; i < array.length; i++) {
    const difference = target - array[i];
    if (visitedNumbers[difference]) {
      return true;
    }
    visitedNumbers[array[i]] = true;
  }

  return false;
}

/* 
  Add your pseudocode here
  Function hasTargetSum(array, target):
    Create an empty object called visitedNumbers

    Iterate through the array using a for-loop
        Calculate the difference needed to reach the target sum (difference = target - array[i])
        Check if the difference exists in the visitedNumbers object
            If exists, return true
        Add the current number to the visitedNumbers object

    Return false (no pair found that sums up to the target)

*/


/*
  Add written explanation of your solution here
*/

// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", hasTargetSum([3, 8, 12, 4, 11, 7], 10));

  console.log("");

  console.log("Expecting: true");
  console.log("=>", hasTargetSum([22, 19, 4, 6, 30], 25));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", hasTargetSum([1, 2, 5], 4));
}

module.exports = hasTargetSum;
