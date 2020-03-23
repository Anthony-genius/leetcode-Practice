### Code
```
class Solution:
    def numRookCaptures(self, board: List[List[str]]) -> int:
        directions = [[1,0], [-1,0], [0,1], [0,-1]]
        count = 0
        for i in range(8):
            for j in range(8):
                if board[i][j] == "R":
                    for dx, dy in directions:
                        x = i
                        y = j
                        while(x + dx >= 0 and y + dy >= 0 and x + dx < 8 and y + dy < 8):
                            x += dx
                            y += dy
                            
                            if board[x][y] == "p":
                                count += 1
                                break
                            elif board[x][y] == "B":
                                break
                    return count
```
### Test case
```
Input: [[".",".",".",".",".",".",".","."],[".","p","p","p","p","p",".","."],[".","p","p","B","p","p",".","."],[".","p","B","R","B","p",".","."],[".","p","p","B","p","p",".","."],[".","p","p","p","p","p",".","."],[".",".",".",".",".",".",".","."],[".",".",".",".",".",".",".","."]]
Output: 0
Explanation: 
Bishops are blocking the rook to capture any pawn.
```

```
Input: [[".",".",".",".",".",".",".","."],[".",".",".","p",".",".",".","."],[".",".",".","R",".",".",".","p"],[".",".",".",".",".",".",".","."],[".",".",".",".",".",".",".","."],[".",".",".","p",".",".",".","."],[".",".",".",".",".",".",".","."],[".",".",".",".",".",".",".","."]]
Output: 3
Explanation: 
In this example the rook is able to capture all the pawns.
```

```
Input: [[".",".",".",".",".",".",".","."],[".",".",".","p",".",".",".","."],[".",".",".","p",".",".",".","."],["p","p",".","R",".","p","B","."],[".",".",".",".",".",".",".","."],[".",".",".","B",".",".",".","."],[".",".",".","p",".",".",".","."],[".",".",".",".",".",".",".","."]]
Output: 3
Explanation: 
The rook can capture the pawns at positions b5, d6 and f5.
```