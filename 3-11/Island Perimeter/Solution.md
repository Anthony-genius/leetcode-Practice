### CODE
```
class Solution:
    def islandPerimeter(self, grid: List[List[int]]) -> int:
        perimeters = 4 * sum(sum(i) for i in grid)
        for i in range(0, len(grid)):
            for j in range(0, len(grid[0])-1):
                if grid[i][j] == grid[i][j+1] == 1:
                    perimeters -= 2
        for i in range(0, len(grid)-1):
            for j in range(0, len(grid[0])):
                if grid[i][j] == grid[i+1][j] == 1:
                    perimeters -= 2
        return perimeters
```
### TESTCASE
```
Input:
[[0,1,0,0],
 [1,1,1,0],
 [0,1,0,0],
 [1,1,0,0]]

Output: 16
```