/*
 * Find the Missing Number: Summation Formula
 * -----------------------
 */
function findMissingNo(arr) {
  let n = arr.length;
  let total = Math.floor((n + 1) * (n + 2) / 2);

  for (let i = 0; i < n; i++) {
    total -= arr[i];
  }

  console.log(`Missing value ${total}`);
}

function findMissingNo2ndWay(arr) {
  let n = arr.length;
  let total = 1;

  for (let i = 2; i <= (n + 1); i++) {
    total += i;
    total -= arr[i - 2];
  }

  console.log(`Missing value ${total}`);
}

// const arr = [ 1, 2, 3, 4, 5, 6, 8 ];
// findMissingNo(arr, arr.length);
// findMissingNo2ndWay(arr, arr.length);


/*
 * Find the Missing Number: XOR to solve the problem.
 * -----------------------
 * Complexity Analysis:
    > Time Complexity: O(n).
      - Only one traversal of the array is needed.
    > Space Complexity: O(1).
      - No extra space is needed.
 */
function findMissingNoXor(a, n) {
  // For xor of all the elements in array
  let x1 = a[0];

  // For xor of all the elements from 1 to n+1
  let x2 = 1;

  for (let i = 1; i < n; i++) x1 = x1 ^ a[i];
  for (let i = 2; i <= n; i++) x2 = x2 ^ i;

  console.log({
    x1,
    x2
  }, x1 ^ x2);
  return x1 ^ x2;
}
// findMissingNoXor([1, 2, 3, 5], 5);


/*
 * Count trailing zeroes in factorial of a number
 * -----------------------
 * Complexity Analysis:
    > Time Complexity: O(log5n)
    > Auxiliary Space: O(1)
 */
function trailingZeroes(N) {
  if (N < 0)
    return -1;

  let count = 0;
  for (let i = 5; Math.floor(N / i) >= 1; i *= 5) {
    count += Math.floor(N / i);
  }

  return count;
}


/*
 * Represent the fraction of two numbers in the string format
 */
fractionToDecimal(numerator, denominator) {
  if (numerator === 0) {
    return '0';
  }

  // If any one (out of numerator and denominator) is -ve, sign of resultant answer -ve.
  let sign = (numerator < 0) ^ (numerator < 0) ? -1 : 1;

  numerator = Math.abs(numerator);
  denominator = Math.abs(denominator);

  // Calculate the absolute part (before decimal point).
  let initial = parseInt(numerator / denominator);

  let res = [];

  if (sign === -1) {
    res.push('-');
  }

  res.push(initial.toString());

  // If completely divisible, return answer.
  if (numerator % denominator === 0) {
    return res.join('');
  }

  res.push('.');

  let remainder = numerator % denominator; // Initialize remainder
  let map = new Map();

  // Position at which fraction starts repeating if it exists
  let index;
  let repeating = false;
  while (remainder > 0 && !repeating) {
    // If this remainder is already seen, then there exists a repeating fraction.
    if (map.has(remainder)) {
      // Index to insert parentheses
      index = map.get(remainder);
      repeating = true;
      break;
    } else {
      map.set(remainder, res.length);
    }

    remainder = remainder * 10;

    // Calculate quotient, append it to result and calculate next remainder
    let temp = parseInt(remainder / denominator);
    res.push(temp.toString());
    remainder = remainder % denominator;
  }

  // If repeating fraction exists, insert parentheses.
  if (repeating) {
    res.push(')');
    res.splice(index, 0, '(')
  }

  return res.join('');
}



/*
	    * Nth natural number after removing all numbers consisting of the digit 9
	    * -----------------------
	    * Complexity Analysis:
          > Time Complexity: O(log9 N)
          > Auxiliary Space: O(1)
	    */
findNth(N) {
  let result = 0;
  let p = 1;

  // Iterate while N is greater than 0
  while (N > 0) {
    result += (p * (N % 9)); // Update the result

    // Devide by 9
    N = parseInt(N / 9, 10);

    // Multiply p by 10
    p = p * 10;
  }

  return result;
}


/*
		    * Find the smallest positive integer value that cannot be represented as sum of any subset of a given array
		    * -----------------------
		    * Complexity Analysis:
	          > Time Complexity: O(log9 N)
	          > Auxiliary Space: O(1)
		    */
smallestpositive(arr, n) {
  let res = 1;

  for (let i = 0; i < n && arr[i] <= res; i++) {
    res = res + arr[i];
  }

  return res;
}
