/**
 * @param {string} s
 * @return {string}
 */
var freqAlphabets = function(s) {
    let str = "";
    for (var i = 0; i < s.length; i++) {
        if(s[i+2]=='#') {
            str += String.fromCharCode(96 + 10 * s[i] + parseInt(s[i+1]));
            i += 2;
        }
        else {
            str += String.fromCharCode(96 + parseInt(s[i]));
        }
    }
    return str;
    
};