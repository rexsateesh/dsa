function getSumToSingleDigit(inp) {
	let n = inp.toString();
	let r = 0;

	for(let i = 0; i < n.length; i++) {
		r += parseInt(n[i]);
	}

	n = r.toString();
	
	console.log({n});
	
	if(n.length > 1) {
		return getSumToSingleDigit(n);
	}

	return n;
}

const r = getSumToSingleDigit(9834775743883);
console.log("Sum to single digit: ", r);
