### Code
```
class Solution:
    def findComplement(self, num: int) -> int:
        ans = ''
        for i in bin(num)[2:]:
            if i == '1':
                ans += '0'
            else:
                ans += '1'
        return int(ans, 2)
```
### Test case
```
Input: 5
Output: 2
```
```
Input: 1
Output: 0
```