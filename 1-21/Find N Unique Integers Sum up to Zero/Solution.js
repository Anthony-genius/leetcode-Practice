/**
 * @param {number} n
 * @return {number[]}
 */
var sumZero = function(n) {
    var num = Math.floor(n/2);
    var res = [];
    for (var i=1; i<=num; i++) {
        res.push(i, -i)
    }
    if (n%2 !==0) {
        res.push(0)
    }
    return res;
};
