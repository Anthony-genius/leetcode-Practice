### Code
class Solution:
    def smallestRangeI(self, A: List[int], K: int) -> int:
        small = -(abs(K))
        big = abs(K)
        tmp_small = min(A) + big
        tmp_big = max(A) + small
        if(tmp_small >= tmp_big):
            return 0
        return abs(tmp_small - tmp_big)
### Testcase
```
Input: A = [1], K = 0
Output: 0
Explanation: B = [1]
```
```
Input: A = [0,10], K = 2
Output: 6
Explanation: B = [2,8]
```
```
Input: A = [1,3,6], K = 3
Output: 0
Explanation: B = [3,3,3] or B = [4,4,4]
```