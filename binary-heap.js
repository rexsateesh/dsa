class MinHeap {
	// Constructor: Builds a heap from a given array a[] of given size
	constructor(capacity) {
		this.arr = [];
		this.capacity = capacity;
		this.heapSize = 0;
	}
	
	swap(x, y) {
		let temp = this.arr[x];
		this.arr[x] = this.arr[y];
		this.arr[y] = temp;
	}
	
	parent(i) {
		return (i-1) / 2;
	}
	
	left(i) {
		return (2*i) + 1;
	}
	
	right(i) {
		return (2*i) + 2;
	}
	
	getMin() {
		return this.arr[0];
	}
	
	// Inserts a new key 'k'
	insertKey(k) {
		if(this.heapSize === this.capacity) {
			console.error('Overflow: Cannot insert the key')
			return;
		}
		
		this.heapSize++;
		let i = this.heapSize - 1;
		this.arr[i] = k;
		
		// Fix the min heap property if it is violated the rule
		while(i != 0 && this.arr[this.parent(i)] > this.arr[i]) {
			this.swap(i, this.parent(i));
			i = this.parent(i);
		}
	}
	
	// Decreases value of key at index 'i' to new_val.  It is assumed that
	// new_val is smaller than harr[i].
	decreaseKey(i, newVal) {
		this.arr[i] = newVal;
		while(i != 0 && this.arr[this.parent(i)] > this.arr[i]) {
			this.swap(i, this.parent(i));
			i = this.parent(i);
		}
	}

	// Method to remove minimum element (or root) from min heap
	extractMin() {
		if (this.heapSize <= 0)
			return 0;
		
		if (this.heapSize == 1) {
			this.heapSize--;
			return this.arr[0];
		}
		
		let root = this.arr[0];
		this.arr[0] = this.arr[this.heapSize - 1];
		this.heapSize--;
		
		this.minHeapify(0);
		
		return root;
	}
	
	// This function deletes key at index i. It first reduced value to minus
	// infinite, then calls extractMin()
	deleteKey(i) {
		this.decreaseKey(i, 0);
		this.extractMin();
	}
	
	// A recursive method to heapify a subtree with the root at given index
	// This method assumes that the subtrees are already heapified
	minHeapify(i) {
		let l = this.left(i);
		let r = this.right(i);
		let smallest = i;
		
		if (l < this.heapSize && this.arr[l] < this.arr[i])
			smallest = l;
		
		if (r < this.heapSize && this.arr[r] < this.arr[smallest])
			smallest = r;
		
		if (smallest != i) {
			this.swap(i, this.parent(i));
			this.minHeapify(smallest);
		}
	}
	
	print() {
		console.log(this.arr);
	}
}

const minHeap = new MinHeap(11);
minHeap.insertKey(3);
minHeap.insertKey(2);
minHeap.deleteKey(1);
minHeap.insertKey(15);
minHeap.insertKey(5);
minHeap.insertKey(4);
minHeap.insertKey(45);

minHeap.print();

console.log(minHeap.extractMin());
console.log(minHeap.getMin());
minHeap.decreaseKey(2, 1);
console.log(minHeap.getMin());

minHeap.print();