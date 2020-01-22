/**
 * @param {string} S
 * @return {string}
 */
var removeOuterParentheses = function(S) {
    let str = "";
    let count = 0;
    for (val of S) {
        if (val === '(') {
            if (count++ > 0) {
                str += val;
            }
        } else {
            if (--count > 0) {
                str += val;
            }
        }
    }
    return str;
};

// test case

//     Input: "(()())(())"
//     Output: "()()()"