function bubbleSort(a, n) {
  let isSwapped = false;

  for(let i = 0; i < n; i++) {
    isSwapped = false;

    for(let j = 0; j < n; j++) {
      if (a[j] > a[j + 1]) {
        let tmp = a[j];
        a[j] = a[j+1];
        a[j+1] = tmp;

        isSwapped = true;
      }
    }

    // If no swap then break the loop
    if (!isSwapped) {
      break;
    }
  }
}

function insertionSort(a, n) {
  let i, cur, pos;

  for(i = 1; i < n; i++) {
    pos = i - 1; // Prev element
    cur = a[i]; // Current element

    /* Move elements of arr[0..i-1], that are
      greater than key, to one position ahead
      of their current position */
    while(pos >= 0 && a[pos] > cur) {
      a[pos + 1] = a[pos];
      pos--;
    }

    a[pos + 1] = cur;
  }
}

function selectionSort(a, n) {
  for (let i = 0; i < n; i++) {
    let min = i; // Set current as minimum

    // Check next minimum element
    for(let j = i + 1; j < n; j++) {
      if (a[j] < a[min]) {
        min = j; // Change min position
      }
    }

    if (min !== i) {
      let tmp = a[i];
      a[i] = a[min];
      a[min] = tmp;
    }
  }
}

function mergeSort(arr, left, right) {
  if (left < right) {
    let middle = Math.floor((left + right) / 2);

    mergeSort(arr, left, middle);
    mergeSort(arr, middle + 1, right);

    // Merge the sorted subarrays
    merge(arr, left, middle, right);
  }
}

/*
 * @param {number[]} arr: Array
 * @param {number} p: Left index
 * @param {number} q: Middle index
 * @param {number} r: Right index
 */
function merge(arr, p, q, r) {
  let n1 = q - p + 1;
  let n2 = r - q;

  let L = new Array(n1);
  let M = new Array(n2);

  for(let i = 0; i < n1; i++) {
    L[i] = arr[p + i];
  }

  for(let j = 0; j < n2; j++) {
    M[j] = arr[q + 1 + j];
  }

  // Maintain current index of sub-arrays and main array
  let i, j, k;
  i = 0;
  j = 0;
  k = p;

  // Until we reach either end of either leftPart or rightPart, pick larger among
  // elements leftPart and rightPart and place them in the correct position at arr[left..right]
  while(i < n1 && j < n2) {
    if (L[i] <= M[j]) {
      arr[k] = L[i];
      i++;
    } else {
      arr[k] = M[j];
      j++;
    }

    k++;
  }

  // When we run out of elements in either leftPart or rightPart,
  // pick up the remaining elements and put in arr[left..right]
  while(i < n1) {
    arr[k] = L[i];
    i++;
    k++;
  }

  while(j < n2) {
    arr[k] = M[j];
    j++;
    k++;
  }
}

// Experiment
let a = [35, 10, 31, 11, 26];
let n = a.length;

console.log('Before sorting: ', a);
mergeSort(a, 0, n - 1);
console.log('After sorting: ', a);
