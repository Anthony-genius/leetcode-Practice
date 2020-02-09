### Code
```
class Solution(object):
    def findSolution(self, customfunction, z):
        """
        :type num: int
        :type z: int
        :rtype: List[List[int]]
        """
        x,y = 1, 1000
        ans = []
        while 1<=x<=1000 and 1<=y<=1000:
            if customfunction.f(x,y) == z:
                ans.append([x,y])
                x += 1
                y -= 1
                
            elif customfunction.f(x,y) < z:
                x += 1
            else:
                y -= 1
        return ans
```

### Test case
```
Input: 1, 5
Output: [[1,4],[2,3],[3,2],[4,1]]
```