/**
 * @param {number} num
 * @return {number}
 */
var maximum69Number  = function(num) {
    let s = num.toString();
    let i = s.indexOf('6');
    return s.split("").map((c, j) => i == j ? '9' : c).join("");
};