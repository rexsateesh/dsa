let s = 'a';
let n = 1000000000000000;

function getACount(s) {
    const match = s.match(/a/g);
    return match ? match.length : 0;
}

function repeatedString(s, n) {
    const aCount = getACount(s);
    const due = n % s.length;
    const baseCount = Math.floor(n / s.length) * aCount
    
    if (due === 0) {
        return baseCount
    }
    
    const lastStr = s.substring(0, due);
    const lastAcount = getACount(lastStr)
    
    return baseCount + lastAcount;
}
	