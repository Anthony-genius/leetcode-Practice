### Code
```
class Solution:
    def minCostToMoveChips(self, chips: List[int]) -> int:
        a,b = 0, 0
        for i in chips:
            if i&1:
                a+=1
            else:
                b+=1
        print("a", a, "b", b)
        return min(a,b)
```
### Testcase
```
Input: chips = [1,2,3]
Output: 1
```
```
Input: chips = [2,2,2,3,3]
Output: 2
```