### Code
```
class Solution:
    def heightChecker(self, heights: List[int]) -> int:
        needed = sorted(heights)
        
        result = 0
        
        for i in range(len(heights)):
            if heights[i] != needed[i]:
                result += 1
        return result
```

### Test case
```
Input: heights = [1,1,4,2,1,3]
Output: 3
```