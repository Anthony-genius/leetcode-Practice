### Code
```
"""
   This is the custom function interface.
   You should not implement it, or speculate about its implementation
   class CustomFunction:
       # Returns f(x, y) for any given positive integers x and y.
       # Note that f(x, y) is increasing with respect to both x and y.
       # i.e. f(x, y) < f(x + 1, y), f(x, y) < f(x, y + 1)
       def f(self, x, y):
  
"""

from itertools import count
class Solution:
    def findSolution(self, customfunction: 'CustomFunction', z: int) -> List[List[int]]:
        results = []
        for x in count(1):
            for y in count(1):
                if (result := customfunction.f(x, y)) == z:
                    results.append([x, y])
                elif result > z:
                    if y == 1:
                        return results
                    break
```

### Test case
```
Input: function_id = 1, z = 5
Output: [[1,4],[2,3],[3,2],[4,1]]
```
```
Input: function_id = 2, z = 5
Output: [[1,5],[5,1]]
```