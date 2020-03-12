### Code
```
class Solution:
    def lastStoneWeight(self, stones: List[int]) -> int:
        while(len(stones) >= 2):
            stones.sort(reverse=True)
            if stones[0] == stones[1]:
                stones.pop(0)
                stones.pop(0)
            else:
                newval = stones[0] - stones[1]
                stones.pop(0)
                stones.pop(0)
                stones.insert(0, newval)
        return sum(stones)
```
### Testcase
```
Input: [2,7,4,1,8,1]
Output: 1
```