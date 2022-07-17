function MyArray(arrayData) {
	this.arr = arrayData;
	
	// Reverse an Array, Time Complexity O(n)
    this.reverseArray = () => {
        let start = 0;
        let end = arr.length - 1;
       
        while(start < end) {
            let temp = arr[start];
            arr[start] = arr[end];
            arr[end] = temp;
            start++;
            end--;
        }
       
        return arr;
    };
	
	
	// Get Min/Max value from an Array, Time Complexity O(n)
	this.getMinMax = () => {
		let min = 0, max = 0;
		for (let i = 0; i < this.arr.length; i++) {
			if (min === 0) {
				min = this.arr[i];
			}
			
			if (this.arr[i] < min) {
				min = this.arr[i];
			}
			
			if (this.arr[i] > max) {
				max = this.arr[i];
			}
		}
		
		return {min, max};
	}
	
	// Maximum sum of i*arr[i] among all rotations of a given array
	this.maximumSumOfArrayRotations = () => {
		const n = this.arr.length;
		
		for(let i = 0; i < n; i++) {
			let sum = 0;
			
			for(let j = 0; j < n; j++) {
				//
			}
		}
		
		return this.arr;
	}
}

const input = [8,3,1,2];
const arr = new MyArray(input); // Instantiate the object

// Reverse Array
// console.log(arr.reverseArray()); // Output [ 6, 5, 4, 3, 2, 1 ]

// Get Min/Max value from array
// console.log(arr.getMinMax());

// Maximum sum of i*arr[i] among all rotations of a given array
console.log(arr.maximumSumOfArrayRotations());