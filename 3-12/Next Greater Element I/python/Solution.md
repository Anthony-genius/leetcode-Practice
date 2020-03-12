### Code
```
class Solution:
    def nextGreaterElement(self, nums1: List[int], nums2: List[int]) -> List[int]:
        res = []
        for i, n in list(enumerate(nums1)):
            ind = nums2.index(n)
            flag = False
            for j in range(ind, len(nums2)):
                if nums2[j] > n:
                    res.append(nums2[j])
                    flag = True
                    break
            if not flag:
                res.append(-1)
        return res
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