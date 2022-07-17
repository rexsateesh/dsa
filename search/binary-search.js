function binarySearch(arr, x, low, high) {
	if (low > high) {
		return -1;
	}

	let mid = Math.floor((low + high) / 2);
	if (x == arr[mid])
		return mid

	 if (x > arr[mid])
     	return binarySearch(arr, x, mid + 1, high) // x is on the right side

     return binarySearch(arr, x, low, mid - 1) // x is on the right side
}


const arr = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21];
const x = 17; // Searching value
const len = arr.length;

console.log(binarySearch(arr, x, 0, len - 1));
