var toLowerCase = function(str) {
   let newStr = '';
	for(let i = 0; i < str.length; i++){
		let strCharCode = str.charCodeAt(i);
		
        if(strCharCode >= 65 && strCharCode <= 90){
            newStr += String.fromCharCode(strCharCode + 32);
        }else{
			newStr += str[i];
		}
		
    }
	return newStr;
};