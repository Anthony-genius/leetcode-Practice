/**
 * @param {number} n
 * @return {number}
 */
var subtractProductAndSum = function(n) {
    //var arr = Array.from(String(n), Number);
    var arr = String(n);
    var sum=0, mut=1;
    for (var i = 0; i < arr.length; i++) {
        sum += Number(arr[i]);
        mut *= Number(arr[i]);       
    }
    return mut-sum
};