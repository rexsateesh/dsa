class HashTable {
	constructor(dataSize) {
		this.table = new Array(dataSize);
	}
	
	_hash(key) {
		let hash = 0;
		let len = key.length;
		for(let i = 0; i < len; i++) {
			hash += key.charCodeAt(i);
		}
		
		return hash % this.table.length;
	}
	
	set(key, val) {
		const index = this._hash(key);
		
		if (this.table[index]) {
			if (Array.isArray(this.table[index])) {
				for(let i = 0; i < this.table[index].length; i++) {
					// Skip if null
					if (!this.table[index][i]) {
						continue;
					}
					
					// If matched key then replace value
					if (this.table[index][i].key === key) {
						this.table[index][i].val = val;
					}
				}
				
				// If match not found then add object at n lenths index
				this.table[index][this.table[index].length] = {key, val};
			} else {
				const items = [this.table[index]]; // Get value and store in array at 0 index
				items[1] = {key, val}; // add new data
				this.table[index] = items; // replace back to hash table at same index
			}

			return;
		}
		
		// Set first time item
		this.table[index] = {key, val};
	}
	
	get(key) {
		const index = this._hash(key);
		
		// If Collisions exists then find the array and traverse.
		if (Array.isArray(this.table[index])) {	
			for(let i = 0; i < this.table.length; i++) {
				if (!this.table[index][i]) {
					continue;
				}
				
				if (this.table[index][i].key === key) {
					console.log(this.table[index][i]);
					return this.table[index][i].val;
				}
			}
		}
		
		
		return this.table[index].val;
	}
	
	remove(key) {
		const index = this._hash(key);
		
		if (this.table[index] && this.table[index].length) {
			this.table[index] = [];
			return true;
		} else {
			return false;
		}
	}
	
	display() {
		this.table.forEach((values, ind) => {
			console.log(`${ind}: ${JSON.stringify(values)}`);
		});
		
		
	}
}

function asciiCodes(inputRange) {
	let res = {};
	
	let ranges = inputRange.split(';');
	if (ranges.length == 0) {
		return res;
	}
	
	ranges.forEach(range => {
		const startEndPoint = range.split('-');
		if (startEndPoint.length == 0) {
			return res;
		}
		
		const [start, end] = startEndPoint;
		for(let i = start.charCodeAt(); i < end.charCodeAt(); i++) {
			res[i] = String.fromCharCode(i);
		}
	});
	
	return res;
}

console.log(asciiCodes('A-Z;a-z'))


const ht = new HashTable(10);

ht.set("Key", 'i am Key');
ht.set("yeK", 'i am yeK');
ht.set("a", 'i am aaaa');
ht.set("A", 'i am AAAA');
ht.set("ARKK", 'i am ARKK');

ht.display();

console.log(ht.get('a'));
console.log(ht.get('A'));
console.log(ht.get('Key'))

ht.set("a", 'replaced aaaa');
ht.display();

console.log(ht.get('a'));