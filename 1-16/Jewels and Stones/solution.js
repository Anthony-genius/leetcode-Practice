/**
 * @param {string} J
 * @param {string} S
 * @return {number}
 */
var numJewelsInStones = function(J, S) {
    var i, j, cnt = 0;
    for (i=0; i<S.length; i++) {
        for (j=0; j<J.length; j++) {
            if (S[i] == J[j]) 
                cnt++;
        }
    }
    return cnt;
};

// test case
// #1
//     input: J = "aA", S = "aAAbbbb"
//     output: 3
// #2
//     input: J = "z", S = "ZZ"
//     output: 0