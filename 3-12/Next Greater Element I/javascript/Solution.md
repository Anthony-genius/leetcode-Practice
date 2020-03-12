### Code
```
var nextGreaterElement = function(nums1, nums2) {
    return nums1.map(item => {
        for (let i = nums2.indexOf(item) + 1; i < nums2.length; i++) {
            if (nums2[i] >  item) return nums2[i]
        }
        return -1
    })
};
```
### Testcase
```
Input: nums1 = [4,1,2], nums2 = [1,3,4,2].
Output: [-1,3,-1]
```
```
Input: nums1 = [2,4], nums2 = [1,2,3,4].
Output: [3,-1]
```