class Stack {
	constructor() {
		this.items = [];
	}
	
	// push function
	push(item) {
		this.items.push(item); // Push element into the items
	}
	
	// pop function
	pop() {
		// return top most element in the stack
    	// and removes it from the stack
    	// Underflow if stack is empty
		if (this.items.length === 0) {
			return 'Underflow';
		}
		
		return this.items.pop();
	}
	
	// peek function
	peek() {
		// return the top most element from the stack
    	// but does'nt delete it.
		return this.items[this.items.length - 1];
	}
	
	// isEmpty function
	isEmpty() {
		// return true if stack is empty
		return this.items.length == 0;
	}
	
	printStack() {
		let str = '';
		for(let i = 0; i < this.items.length; i++) {
			str += this.items[i] + ' ';
		}
		
		return str;
	}
}

// Creating Object for Stack class
const stack = new Stack();

// Testing isEmpty and Pop on an Empty Stack

// Return false
console.log(stack.isEmpty());

// Return Underflow
console.log(stack.pop());

// Adding element to the stack
stack.push(10);
stack.push(20);
stack.push(30);

// Printing the stack element
// Prints [10, 20, 30]
console.log(stack.printStack());

// Returns 30 and remove it from stack
console.log(stack.pop());
	
// returns [10, 20]
console.log(stack.printStack()); 


