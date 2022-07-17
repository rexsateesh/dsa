/* BitWise Operators
 & 	And
 | 	Or
 ^ 	Xor (Exclusive Or)
 ~  One's Complement (Uniary operator)
 << Left Shift
 >> Right Shift
 */

let a, x, r;

// Bitwise & (And) Operator
// Returns if both value is True (1)
a = 193; 	// 1100 0001
x = 0xf0;	// 1111 0000
r = a & x;	// 1100 0000
console.log(r); // Res 192


// Bitwise | (Or) Operator
// Returns If any one of the value is True (1)
a = 193; 	// 1100 0001
x = 0xf0;	// 1111 0000
r = a | x;	// 1111 0001
console.log(r); // Res 241


// Bitwise ^ (xor) Operator
// Returns False(0) if both value is True(1)
a = 193; 	// 1100 0001
x = 0xf0;	// 1111 0000
r = a ^ x;	// 0011 0001
console.log(r); // Res 49


// Bitwise ~ (Not) Operator
// Flip values 0 to 1 and 1 to 0. 
a = 193; // 1100 0001
r = ~a;	 // 0011 1110
console.log(r); // Res -194

const flip = c => c == '0' ? '1' : '0';

const onesComplement = (bin) => {
	let n = bin.length;
	let ones = "";
	
	for(let i = 0; i < n; i++) {
		ones += flip(bin[i]);
	}
	
	return ones;
};

const twosComplement = (bin) => {
	let n = bin.length;
	let i;
	let twos = "";
	
	//  for two's complement go from right to left in
    //  ones complement and if we get 1 make, we make
    //  them 0 and keep going left when we get first
    //  0, make that 1 and go out of loop
	
	twos = bin.split('');
	
	for(i = n - 1; i >= 0; i--) {
		if (bin[i] == '1') {
			twos[i] = '0';
		} else {
			twos[i] = '1';
			break;
		}
	}
	
	twos = twos.join('');
	
	// If No break : all are 1  as in 111  or  11111;
	// in such case, add extra 1 at beginning
	if (i == -1) {
		twos = '1' + twos;
	}
	
	return twos;
}

const printOnesAndTwosComplement = (bin) => {
	let ones = onesComplement(bin); // To store negative (signed) numbers
	let twos = twosComplement(ones); // To Store positive (unsigned) number
	
	return {ones, twos};
} 

console.log(printOnesAndTwosComplement('1100'));