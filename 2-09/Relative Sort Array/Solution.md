### Code
```
from collections import Counter
class Solution(object):
    def relativeSortArray(self, arr1, arr2):
        """
        :type arr1: List[int]
        :type arr2: List[int]
        :rtype: List[int]
        """
        count1 = Counter(arr1)
        results = []
        for ele in arr2:
            results.extend([ele]*count1[ele])
            count1.pop(ele)
        counts1 = sorted(count1.items(), key=lambda x: x[0])
        for key,val in counts1:
            results.extend([key]*val)
        return results
```

### Test case
```
Input: [2,3,1,3,2,4,6,7,9,2,19]
[2,1,4,3,9,6]
Output: [2,2,2,1,4,3,3,9,6,7,19]
```