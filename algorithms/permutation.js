/*
	Q1. How many outfits does sally have if she has 5 shirts, 5 pants and 2 hats
	Formula: (5x5x2) = 50

	Q2. How many groups of 5 people can you from 10 people.
	Formula:
		P = n! / (n-r)!
		C = n! / r!(n-r)!
	
	P = n! / (n-r)!  (Applying formula for permutation)
----------------------------------------------------------------------
	P = 10! / (10-5)!

(Factorial) 10.9.8.7.6.5.4.3.2.1
		   -------------------- = ?
		        5.4.3.2.1         



    C = n! / r!(n-r)! (Applying formula for permutation & combination)
----------------------------------------------------------------------
	C = 10! / 5!(10-5)!

		 10.9.8.7.6.5.4.3.2.1
		---------------------- = ?
	    (5.4.3.2.1)(5.4.3.2.1)
*/


function permutationCombinations(inputArr) {
	const res = [];
	
	const backtrack = (i, nums) => {
		if (i === nums.length) {
			res.push(nums.slice());
			return;
		}
		
		for (let j = i; j < nums.length; j++) {
			[nums[i], nums[j]] = [nums[j], nums[i]]; // swap value
			
			backtrack(i + 1, nums);
			
			[nums[i], nums[j]] = [nums[j], nums[i]]; // swap value
		}
	}
	
	backtrack(0, inputArr);
	
	return res;
} 

const perm = permutationCombinations([1,2,3,4]);

module.exports = {
	permutationCombinations
}
