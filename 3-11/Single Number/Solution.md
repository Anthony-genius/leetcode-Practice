### Code
```
from collections import Counter
class Solution:
    def singleNumber(self, nums: List[int]) -> int:
        dic = Counter(nums)
        for key in dic.keys():
            if dic[key] == 1:
                return key
```
### Test case
```
Input: [2,2,1]
Output: 1
```
```
Input: [4,1,2,1,2]
Output: 4
```