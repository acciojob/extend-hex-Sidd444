const extendHex = (shortHex) => {
  // write your code here
	let s="#";
	if(shortHex.length===4){
	 s+=shortHex[1]+shortHex[1];
	 s+=shortHex[2]+shortHex[2];
	 s+=shortHex[3]+shortHex[3];
	}else{
		s+=shortHex[0]+shortHex[0];
		s+=shortHex[1]+shortHex[1];
		s+=shortHex[2]+shortHex[2];
	}
	
	return s;
};
   
// Do not change the code below.
//const shortHex = prompt("Enter Short Hex.");
alert(extendHex(shortHex));
