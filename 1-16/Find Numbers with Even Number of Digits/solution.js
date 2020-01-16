/**
 * @param {number[]} nums
 * @return {number}
 */
var findNumbers = function(nums) {
    var i, j, cnt = 0;     //Initialize variables    
    for(i = 0; i < nums.length; i ++){
        var cur = String(nums[i]);
        
        if(cur.length % 2 == 0)
            cnt ++;
    }
    
    return cnt;
    nums.forEach((item,index)=>{
        const cur = String
    })
    
};


// Test case
// #1
//     Input: nums = [12,345,2,6,7896]
//     Output: 2
// #2
//     Input: nums = [555,901,482,1771]
//     Output: 1 