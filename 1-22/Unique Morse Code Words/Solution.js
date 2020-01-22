/**
 * @param {string[]} words
 * @return {number}
 */
var uniqueMorseRepresentations = function(words) {
    var set = new Set();
    var serials =             [".-","-...","-.-.","-..",".","..-.","--.","....","..",".---","-.-",".-..","--","-.","---",".--.","--.-",".-.","...","-","..-","...-",".--","-..-","-.--","--.."];
    for (var i = 0; i < words.length; i++ ) {
        var str = "";
        for (var j = 0; j < words[i].length; j++) {
            var code = words[i].charCodeAt(j) - 97;
            code = serials[code];
            str += code;
        }
        set.add(str);
    }
    return set.size;
};


//test case
//#1
// Input: ["gin", "zen", "gig", "msg"]
// Output: 2
//     "gin" -> "--...-."
//     "zen" -> "--...-."
//     "gig" -> "--...--."
//     "msg" -> "--...--."