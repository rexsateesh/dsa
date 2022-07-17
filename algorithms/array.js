function getGcd(a, b) {
  if (b === 0) {
    return a;
  }

  return getGcd(b, a % b);
}

//Function to rotate an array by d elements in counter-clockwise direction.
function rotateArr(arr, d, n) {
  // To Handle if d >= n
  d = d % n;
  let gcd = getGcd(d, n);

  for (let i = 0; i < gcd; i++) {
    /* move i-th values of blocks */
    let temp = arr[i];
    let j = i;

    while (1) {
      let k = j + d;
      if (k >= n)
        k = k - n;

      if (k === i)
        break;

      arr[j] = arr[k];
      j = k;
    }

    arr[j] = temp;
  }

}

// rotateArr([1,2,3,4,5,6,7], 4, 7);

// Majority Element
function majorityElement1(a, size) {
  let maxCount = 0;
  let index = -1;

  for (let i = 0; i < size; i++) {
    let count = 0;

    for (let j = 0; j < size; j++) {
      if (a[i] === a[j]) {
        count++;
      }
    }


    if (count > maxCount) {
      maxCount = count;
      index = i;
    }
  }

  // If Max count greater than size/2 of array
  if (maxCount > (size / 2)) {
    return a[index];
  }

  return -1;
}

// Get Mejority Element from an Array
function majorityElement2(a, size) {
        let maxCount = 0;
        let index = -1;
        const res = {};

        for(let i = 0; i < size; i++) {
            if (!res[a[i]]) {
                res[a[i]] = 0;
            }

            res[a[i]]++;
        }

        // Sort array in descending order
        const keys = Object.keys(res).sort((a,b) => -1);

        keys.forEach((k) => {
          if (res[k] > maxCount) {
            maxCount = res[k];
            index = k;
          }
        });

        // // If Max count greater than size/2 of array
        if (maxCount > (size/2)) {
            return index;
        }

        return -1;
    }

/*
 ** Adding 1 to last element of Array
  Time Complexity: O(n), where n is the size of the array.
  Auxiliary Space: O(1)
 */
function incrementVector(a) {
  let n = a.length;
  a[n-1] += 1; // Add 1 to last digit and find carry
  let carry = parseInt(a[n-1] / 10);
  a[n-1] = a[n-1] % 10;

  for (let i = n - 2; i >= 0; i--) {
    if (carry == 1) {
      a[i] += 1;
      carry = parseInt(a[i] / 10);
      a[i] = a[i] % 10;
    }
  }

  // If carry 1 then we need to add 1 to beginning of the Array
  if (carry == 1) {
    a.unshift(1);
  }

  return a;
}

function addOne(a) {
  let i = a.length - 1; // initialize an index (digit of units)

  // while the index is valid and the value at [index] == 9 set it as 0
  while(i >= 0 && a[i] === 9) {
    a[i--] = 0;
  }

  // If Index < 0 (If All digits were 9)
  if (i < 0) {
    // insert an one at the beginning of the vector
    a.insert(a.begin(), 1, 1);
  } else {
    a[i]++;
  }

  return a;
}

function addOneReverseTechnique(a) {
  let n = a.length;

  // We are reversing the original arr
  // So that we need to iterate from Back.
  a.reverse();
  console.log(a);

  let carry = 0;
  for(let i = 0; i < n; i++) {
    // initially  carry is 0 so this is base case
    if (i == 0) {
      a[i] = a[i] + 1 + carry;

    // If carry is not equal to zero it should be added to
    // array element at that position.
    } else if (carry != 0) {
      a[i] = a[i] + carry;
    }

    // Now to get carry, i.e.
    // If digits[i]>9 we get the value at tens place in carry
    // or else if digits[i]<9 carry will be 0
    carry = parseInt(a[i] / 10);

    // Now if carry is not equal to 0
    // so at that index we should keep the value present
    // at the ones place so we di digits[i]%10
    if (carry != 0) {
      a[i] = a[i] % 10;
    }
  }

  // Afte doing all that if carry is still there which means
  // one more element is needed to be added to the array
  if (carry != 0) {
    a[n-1] = 1;
  }

  // Now we reverse the array so that we get the final array
  a.reverse();

  return a;
}

function swap(arr, ind1, ind2) {
  let c = arr[ind1];
  arr[ind1] = arr[ind2];
  arr[ind2] = c;
}

/*
 * Rearrange
 */
function rearrange(arr, n) {
  let i = 0, j = n - 1;

  // Shift all negative value to the end
  while(i < j) {
    while(i < n - 1 && arr[i] > 0)
      i += 1;

    while(j >= 0 && arr[j] < 0)
      j -= 1;

    if (i < j)
      swap(arr, i, j);
  }

  // i has index of leftmost negative element
  if (i == 0 || i == n)
    return;

  // Start with first positive element at index 0
  // Rearrange array in alternating positive & negative items
  let k = 0;
  while(k < n && i < n) {
    // Swap next positive element at even position from next negative element.
    swap(arr, k, i);
    i = i + 1;
    k = k + 2;
  }

  return arr;
}

// Driver code
// let arr = [ 2, 3, -4, -1, 6, -9 ];
// let n = arr.length;
// console.log(
// rearrange(arr, n)
// );


/*
 * Frequency counting
 * @param {number[]} arr
 * @param {number} N
 * @param {number} P
 */
function frequencyCount(arr, n, p) {
  let res = new Array(n+1).fill(0);
   for(let i = 0; i < n; i++) {
       if (!res[arr[i]]) {
           res[arr[i]] = 0;
       }

       res[arr[i]] += 1;
   }

   res.shift();

   return res.join(' ');
}


/*
 * Factorial program
 */
function smallFactorial(a, n) {
   let res = new Array(n);

   for(let i = 0; i < n; i++) {
     let fact = 1n;
     for(let j = 1; j <= a[i]; j++) {
       fact = fact * j;
     }

     res[i] = fact;
   }

   return res;
}

function multiply(x, res, size) {
  let carry = 0;

  for(let i = 0; i < size; i++) {
    let prod = res[i] * x + carry;

    // Store last digit of 'prod' in res[i]
    res[i] = prod % 10;

    // Put rest in carry
    carry = Math.floor(prod / 10);
  }

  // Put carry in res and increase result size
  while(carry) {
    res[size] = carry % 10;
    carry = Math.floor(carry / 10);
    size++;
  }

  return size;
}

/*
 * Large Factorial Program
 */
function largeFactorial(n) {
  let res = new Array(n);

  // Initialize
  res[0] = 1;
  let size = 1;

  // Apply simple factorial formula n! = 1 * 2 * 3...*n
  for(let x = 2; x <= n; x++) {
    size = multiply(x, res, size);
  }

  return res.reverse().join('');
}

function getFactorial(a, n) {
   let res = new Array(n);
   res[0] = 1;

   for(let i = 1; i < n; i++) {
     let fact = 0;
     for(let j = 1; j <= a[i]; j++) {
       fact = largeFactorial(j);
     }

     res[i] = fact;
   }

   return res.join(' ');
}
