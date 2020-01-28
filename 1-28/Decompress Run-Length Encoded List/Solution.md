### Code
```
var decompressRLElist = function(nums) {
   return nums.reduce((arr, item, index) => {    
        if (index % 2 == 0) {
            const newarr = new Array(item)
            const nextnum = nums[index+1]
            newarr.fill(nextnum, 0, item)
            arr = arr.concat(newarr)
        }
        return arr
    }, []);
};
```

### Test case

```
Input: nums = [1,2,3,4]
Output: [2,4,4,4]
```
```
Input: nums = [2,3,4,5]
Output: [3,3,5,5,5,5]
```