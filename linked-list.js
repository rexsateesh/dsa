// PushFront(Key), 	Time: O(1)
// TopFront(), 		Time: O(1)
// PopFront(), 		Time: O(1)
// PushBack(Key), 	Time: O(n), With Tail O(1)
// TopBack(), 		Time: O(n), With Tail O(1)
// PopBack(), 		Time: O(n)
// Find(Key), 		Time: O(n)
// Erase(Key), 		Time: O(n)
// isEmpty(), 		Time: O(1)
// AddBefore(Node, Key), 	Time: O(n)
// AddAfter(Node, Key), 	Time: O(1)

class Node {
	constructor(node) {
		this.node = node;
		this.next = null;
	}
}

class LinkedList {
	constructor(node) {
		this.head = null;
		this.size = 0;
	}
	
	size() {
		return this.size;
	}
	
	empty() {
		return this.size === 0;
	}
	
	valueAt(index) {
		if (index < 0 || index > this.size) {
			console.error('Please enter valid index');
			return;
		}
		
		
		if (index === 0) {
			return this.head;
		}
		
		let current = this.head;
		let ind = 0;
		while(ind !== index) {
			ind++;
			current = current.next;
		}
		
		return current;
	}
	
	pushFront(elem) {
		console.log(`pushFront ${elem}`);
		let node = new Node(elem);
		if (this.head === null) {
			this.head = node;
			this.size++;
			
			return;
		}
		
		let current = this.head;
		let newNode = new Node(elem);
		newNode.next = current;
		this.head = newNode;
		this.size++;
	}
	
	popFront() {
		if (this.size === 0) {
			return null;
		}
		
		let current = this.head;
		let next = current.next;
		this.head = next;
		this.size--;
		
		console.log(`popFront ${current.node}`);
		
		return current.node;
	}
	
	pushBack(elem) {
		let node = new Node(elem);
		
		if (this.size === 0) {
			this.head = node;
			this.size++;
			
			return;
		}
		
		let current = this.head;
		while(current.next !== null) {
			current = current.next;
		}
		
		current.next = node;
		this.size++;
		console.log(`pushBack ${elem}`);
	}
	
	popBack() {
		if (this.size === 0) {
			return;
		}
		
		if (this.size === 1) {
			this.head = null;
			this.size--;
			
			return;
		}
		
		let current = this.head;
		let previous = null;
		while(current.next !== null) {
			previous = current;
			current = current.next;
		}
		
		previous.next = null;
		this.size--;
		console.log(`popBack ${current.node}`);
	}
	
	front() {
		if (this.size === 0) {
			return null;
		}
		
		console.log(`front ${this.head.node}`);
		
		return this.head.node;
	}
	
	back() {
		if (this.size === 0) {
			return null;
		}
		
		if (this.size === 1) {
			console.log(`back ${this.head.node}`);
			return this.head;
		}
		
		let current = this.head;
		while(current.next !== null) {
			current = current.next;
		}
		
		console.log(`back ${current.node}`);
		
		return current;
	}
	
	insert(value, index) {
		if (index < 0 || index > this.size) {
			console.log('Please enter valid index number');
			return;
		}
		
		let node = new Node(value);
		let current = this.head;
		
		if (index === 0) {
			node.next = current;
			this.head = node;
			this.size++;
			console.log(`insert ${this.head.node}`);
			return;
		}
		
		let previous = null;
		let ind = 0;
		
		while(ind < index) {
			ind++;
			previous = current;
			current = current.next;
		}
		
		node.next = current;
		previous.next = node;
		this.size++;
		console.log(`insert ${node.node}`);
	}
	
	delete(index) {
		if (index < 0 || index > this.size) {
			console.log('Please enter valid index number');
			return;
		}
		
		// Remove at first index
		if (index === 0 && this.size != 0) {
			this.head = this.head.next;
			this.size--;
			return;
		}
		
		let current = this.head;
		let previous = null;
		let ind = 0;
		
		while(ind < (index-1)) {
			ind++;
			previous = current;
			current = current.next;
		}
		
		previous.next = current.next;
		this.size--;
	}
	
	valueNthPosFromEnd(n) {
		let index = this.size - n;
		if (index < 0 || n > this.size) {
			console.log('Please enter valid nth pos number');
			return;
		}
		
		let current = this.head;
		let ind = 0;
		while(ind < index) {
			ind++;
			current = current.next;
		}
		
		console.log(`valueNthPosFromEnd ${current.node}`);
		
		return current;
	}
	
	reverse() {
		if (this.size === 0) {
			console.log('LinkedList is empty');
			return;
		}
		
		let next = null;
		let current = this.head;
		let previous = null;
		while(current !== null) {
			next = current.next;
			current.next = previous;
			
			previous = current;
			current = next;
		}
		
		this.head = previous;
	}
	
	print() {
		let current = this.head;
		let str = '';
		while(current) {
			str += current.node + " ";
			current = current.next;
		}
		
		console.log(`\nLinkedList Print: \n${str}`);
	}
}

const linkedList = new LinkedList();
linkedList.pushFront(1);
linkedList.pushFront(2);
linkedList.pushFront(3);

// linkedList.popFront();
//
// linkedList.pushBack(4);
// linkedList.pushFront(5);
// linkedList.popBack();
//
// linkedList.front();
// linkedList.back();
//
// linkedList.insert(3, 3);
// linkedList.insert(4, 0);
// linkedList.insert(3, 0);
// linkedList.insert(1, 3);
//
// linkedList.delete(3);
// linkedList.valueNthPosFromEnd(4);

linkedList.reverse();

linkedList.print();