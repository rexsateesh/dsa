/*
	Big Oh Notation (O): fn(n) = O(g(n))
	Case: Worst case
	Upper Bound: c.g(n) (Function never grows faster than the upper bound)
	Must true:
	 fn(n) <= c.g(n)

	For all n >= no (N not) and c > 0
	c must be equal to or greater than 0
	no must be greator than 0 (Positive number)
*/

/*
	Omega Notation(Ω): fn(n) = Ω(g(n))
	Case: Best case
	Lower Bound: c.g(n) (Function never grows slowest than the lower bound)
	Must true:
	 fn(n) >= c.g(n)

	For all n >= no (N not) and c > 0
	c must be equal to or greater than 0
	no must be greator than 0 (Positive number)
*/

/*
	Theta Notation (θ): fn(n) = θ(g(n))
	Case: Average case
	Lower and Upper Bound: c1.g(n) and c2.g(n) (Function never grows slowest/faster than the lower bound and upper bound)
	Must true:
	 c1.g(n) <= fn(n) <= c2.g(n)

	For all n >= no (N not) and c > 0
	c must be equal to or greater than 0
	no must be greator than 0 (Positive number)
*/

/*
Common Asymptotic Notations
constant	−	Ο(1)
logarithmic	−	Ο(log n)
linear		−	Ο(n)
n log n		−	Ο(n log n)
quadratic	−	Ο(n2)
cubic		−	Ο(n3)
polynomial	−	nΟ(1)
exponential	−	2Ο(n)
*/


// Complexity: Big O(1)
// Why is this? This program would be referred to as running in constant time or O(1) with respect to the input size. This certainly doesn't have to mean that your code runs in 1 step but no matter many steps it is, if it doesn't change with the size of the inputs, its stills asymptotically constant which we represent as O(1)


// Complexity: Big O(n)
// Reading letter-by-letter to each character. This algorithm is said to run in Linear time with respect to the number of characters 'n' in the string. In short. It runs in O(n).

// Time Complexity will be Big O(n). Why is this? Well, using this approach, the time required to travers the entire string is proportional to the number of characters. Counting the number of characters in a 20-character string is going to take twice as long as it takes to count the characters in a 10-character string. Because you have to look at all the characters and each character takes the same amount of time to look at. As you increase the number of characters, the runtime will increase linearly with input length.


// As you can probably guess, there are many different big O runtimes to measure algorithms with O(n)2 algorithms are asymtotically slower than O(n) algorithms. 
// That is, as the number of elements (n) grows, eventually O(n)2 algorithms will take more time than O(n) algorithms to run. This doesn't mean that O(n) algorithms always run faster than O(n)2 algorithms, even in the same environment, on the same hardware. May be for small input sizes, the O(n)2 algorithm might actually work faster but eventually, as the input size increases towards inifinity, the O(n)2 algorithms runtime will eventually eclipse the runtime of the O(n) algorithm. Just like any quadratic mathematical function will eventually overtake any linear function, no matter how much of head start the linear functions starts of with.


// Big O notation is a way to measure how well a
// computer algorithm scales as the amount of data
// involved increases. It is not always a measure
// of speed as you'll see below

// This is a rough overview of Big O and doesn't 
// cover topics such as asymptotic analysis, which
// covers comparing algorithms as data approaches
// infinity

// What we are defining is the part of the algorithm 
// that has the greatest effect. For example
// 45n^3 + 20n^2 + 19 = 84 (n=1)
// 45n^3 + 20n^2 + 19 = 459 (n=2) Does 19 matter?
// 45n^3 + 20n^2 + 19 = 47019 (n=10) 
// Does the 20n^2 matter if 45n^3 = 45,000?
// Has an O(n^3) Order of n-cubed

function BigONotation(size) {
	this.data = [];
	this.dataSize = size;
	this.itemsInData = 0;
	this.startTime;
	this.endTime;
	
	// O(1) An algorithm that executes in the same
	// time regardless of the amount of data
	// This code executes in the same amount of
	// time no matter how big the array is
	
	this.addItemToArray = (newItem) => {
		this.data[this.itemsInData++] = newItem;
	}
	
	// 0(N) An algorithm thats time to complete will
	// grow in direct proportion to the amount of data
	// The linear search is an example of this

	// To find all values that match what we
	// are searching for we will have to look in
	// exactly each item in the array

	// If we just wanted to find one match the Big O
	// is the same because it describes the worst
	// case scenario in which the whole array must
	// be searched

	this.linearSearchForValue = (value) => {
		let valueInArray = false;
		let indexsWithValue = "";

		startTime = Date.now();

		for (let i = 0; i < this.dataSize; i++) {
			if (this.data[i] == value) {
				valueInArray = true;
				indexsWithValue += i + " ";
			}
		}

		console.log("Value Found: " + valueInArray);

		endTime = Date.now();

		console.log("Linear Search Took " + (endTime - startTime));
	}
	
	// O(N^2) Time to complete will be proportional to
	// the square of the amount of data (Bubble Sort)
	// Algorithms with more nested iterations will result
	// in O(N^3), O(N^4), etc. performance

	// Each pass through the outer loop (0)N requires us
	// to go through the entire list again so N multiplies
	// against itself or it is squared

	this.bubbleSort = () => {
		startTime = Date.now();

		for (let i = this.dataSize - 1; i > 1; i--) {
			for (let j = 0; j < i; j++) {
				if (this.data[j] > this.data[j + 1]) {
					this.swapValues(j, j + 1);
				}
			}
		}

		endTime = Date.now();
		console.log("Bubble Sort Took " + (endTime - startTime));
	}
	
	// O (log N) Occurs when the data being used is decreased
	// by roughly 50% each time through the algorithm. The
	// Binary search is a perfect example of this.

	// Pretty fast because the log N increases at a dramatically
	// slower rate as N increases

	// O (log N) algorithms are very efficient because increasing
	// the amount of data has little effect at some point early
	// on because the amount of data is halved on each run through

	this.binarySearchForValue = (value) => {
		startTime = Date.now();

		let lowIndex = 0;
		let highIndex = this.dataSize - 1;

		let timesThrough = 0;

		while (lowIndex <= highIndex) {
			let middleIndex = (highIndex + lowIndex) / 2;

			if (this.data[middleIndex] < value) {
				lowIndex = middleIndex + 1;

			} else if (this.data[middleIndex] > value) {
				highIndex = middleIndex - 1;

			} else {
				console.log(`Found a Match for ${value} at Index ${middleIndex}`);
				lowIndex = highIndex + 1;
			}

			timesThrough++;
		}

		// This doesn't really show anything because
		// the algorithm is so fast

		endTime = Date.now();

		console.log("Binary Search Took " + (endTime - startTime));
		console.log("Times Through: " + timesThrough);
	}
	
	// O (n log n) Most sorts are at least O(N) because
	// every element must be looked at, at least once.
	// The bubble sort is O(N^2)
	// To figure out the number of comparisons we need
	// to make with the Quick Sort we first know that
	// it is comparing and moving values very
	// efficiently without shifting. That means values
	// are compared only once. So each comparison will
	// reduce the possible final sorted lists in half.
	// Comparisons = log n! (Factorial of n)
	// Comparisons = log n + log(n-1) + .... + log(1)
	// This evaluates to n log n

	this.quickSort = (left, right) => {
		if (right - left <= 0) {
			return;

		} else {
			let pivot = this.data[right];
			let pivotLocation = this.partitionArray(left, right, pivot);

			this.quickSort(left, pivotLocation - 1);
			this.quickSort(pivotLocation + 1, right);
		}
	}
	
	
	this.partitionArray = (left, right, pivot) => {
		let leftPointer = left - 1;
		let rightPointer = right;
		
		while(true) {
			while(this.data[++left] < pivot);
			while(rightPointer > 0 && this.data[--rightPointer] > pivot);
			
			if (leftPointer >= rightPointer) {
				break;
			} else {
				this.swapValues(leftPointer, rightPointer);
			}
		}
		
		this.swapValues(leftPointer, right);
		
		return leftPointer;
	}
	
	this.generateRandomArray = () => {
		for(let i = 0; i < this.dataSize; i++) {
			this.data.push((Math.random() * 1000) + 10)
		}
		
		this.itemsInData = this.dataSize - 1;
	}
	
	this.swapValues = (indexOne, indexTwo) => {
		const temp = this.data[indexOne];
		this.data[indexOne] = this.data[indexTwo];
		this.data[indexTwo] = temp;
	}
}

// O(1) time complexity example
// const o = new BigONotation();
// o.addItemToArray(10);
// console.log(o.data);

const testAlgo1 = new BigONotation(100000);
testAlgo1.generateRandomArray();

const testAlgo2 = new BigONotation(20000);
testAlgo2.generateRandomArray();

const testAlgo3 = new BigONotation(300000);
testAlgo3.generateRandomArray();

const testAlgo4 = new BigONotation(400000);
testAlgo4.generateRandomArray();

// O(N) Test
// testAlgo1.linearSearchForValue(20);
// testAlgo2.linearSearchForValue(20);
// testAlgo3.linearSearchForValue(20);
// testAlgo4.linearSearchForValue(20);

// O(N^2) Test
// testAlgo2.bubbleSort();
// testAlgo3.bubbleSort();
// testAlgo4.bubbleSort();

// O(log N) Test
// testAlgo2.binarySearchForValue(20);
// testAlgo3.binarySearchForValue(20);

// O (n log n) Test
let startTime = Date.now();
testAlgo2.quickSort(0, testAlgo2.itemsInData);
endTime = Date.now();
console.log("Quick Sort Took " + (endTime - startTime));






