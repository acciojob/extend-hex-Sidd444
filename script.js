const extendHex = (shortHex) => {
  // write your code here
  if(shortHex.length==4) shortHex=shortHex.substring(1,4);
   let s="#",low=false,high=false;
   for(let i=0;i<shortHex.length;i++){
	   let c=shortHex[i];
	   if(isNaN(c)){
		   if(c===c.toLowerCase()) low=true;
		   if(c===c.toUpperCase()) high=true;
	   }
	   s+=shortHex[i]+shortHex[i];
   }
   if(low && high) s=s.toUpperCase();
   return s;
};
 
// Do not change the code below.
const shortHex = prompt("Enter Short Hex.");
alert(extendHex(shortHex));
