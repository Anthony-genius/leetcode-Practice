### Code
```
class Solution:
    def shortestToChar(self, S: str, C: str) -> List[int]:
        c_arr = [i for i in range(len(S)) if S[i] == C]
        n = len(c_arr)
        res = []
        for i in range(len(S)):
            index = bisect.bisect_left(c_arr, i)
            if index == 0:
                res.append(abs(i - c_arr[index]))
            elif index < n:
                res.append(min(abs(i - c_arr[index]), abs(i - c_arr[index - 1])))
            else:
                res.append(abs(i - c_arr[index - 1]))
        return res
```
### Testcase
```
Input: S = "loveleetcode", C = 'e'
Output: [3, 2, 1, 0, 1, 0, 0, 1, 2, 2, 1, 0]
```