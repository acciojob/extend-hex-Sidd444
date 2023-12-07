const extendHex = (shortHex) => {
  // write your code here
	let s="#";
	s+=shortHex[1]+shortHex[1];
	s+=shortHex[2]+shortHex[2];
	s+=shortHex[3]+shortHex[3];
	return s;
};

// Do not change the code below.
const shortHex = prompt("Enter Short Hex.");
alert(extendHex(shortHex));
