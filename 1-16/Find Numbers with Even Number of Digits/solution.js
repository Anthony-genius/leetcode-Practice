/**
 * @param {number[]} nums
 * @return {number}
 */

 //First Way
var findNumbers = function(nums) {
    var total = 0;
    var str;
    for (var i = 0; i < nums.length; i++) {
        str = String(nums[i]);
        if (str.length % 2 == 0) {
            total++;
        }
    }
    return total;
};
//Second Way
var findNumbers = function(nums) {
    
    var str = nums.reduce((total,num)=>{
    	const str = String(num);
          if (str.length % 2 == 0) {
            total++;
          }
      return total;
    }, 0);
    return str;
    
};
// Test case
// #1
//     Input: nums = [12,345,2,6,7896]
//     Output: 2
// #2
//     Input: nums = [555,901,482,1771]
//     Output: 1 