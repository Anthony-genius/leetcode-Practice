### Code
```
class Solution(object):
    def removeDuplicates(self, S):
        result = ""
        for c in S:
            if (not result):
                result += c
                continue
            if (result[-1] == c):
                result = result[:-1]
            else:
                result += c
        return result
```
### Testcase
```
Input: "abbaca"
Output: "ca"
```