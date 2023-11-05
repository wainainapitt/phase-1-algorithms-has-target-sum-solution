function hasTargetSum(array, target) {
  // Write your algorithm here
	const seenNumbers = new Set(); // initialize an empty Set
	for (const number of array) {
		const complement = target - number;

		// .has returns true if the Set includes the complement
		if (seenNumbers.has(complement)) return true;

		// .add adds the number to the Set
		seenNumbers.add(number);
	}
	return false;
}

/* 
  Write the Big O time complexity of your function here
  // O(n) time complexity
*/

/* 
  Add your pseudocode here
  iterate over the array of numbers
  for the current number, identify a complementary number that adds to our target
  (for example: if our number is 2, and the target is 5, the complementary number is 3)
  iterate over the remaining numbers in the array
    check if any of the remaining numbers is the complement
      if so, return true
if we reach the end of the array, return false
*/

/*
  Add written explanation of your solution here
  We iterate over the array of numbers, and for each number, we identify a complementary number that adds to our target.
  We then iterate over the remaining numbers in the array, and check if any of the remaining numbers is the complement.
  If so, we return true. If we reach the end of the array, we return false.
  
*/

// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", hasTargetSum([3, 8, 12, 4, 11, 7], 10));
	// add your own custom tests in here
	console.log("Expecting: true");
	console.log("=>", hasTargetSum([3, 8, 12, 4, 11, 7], 10));

  console.log("");
	console.log("");

  console.log("Expecting: true");
  console.log("=>", hasTargetSum([22, 19, 4, 6, 30], 25));
	console.log("Expecting: true");
	console.log("=>", hasTargetSum([22, 19, 4, 6, 30], 25));

  console.log("");
	console.log("");

  console.log("Expecting: false");
  console.log("=>", hasTargetSum([1, 2, 5], 4));
	console.log("Expecting: false");
	console.log("=>", hasTargetSum([1, 2, 5], 4));
}

module.exports = hasTargetSum;
module.exports = hasTargetSum;
 