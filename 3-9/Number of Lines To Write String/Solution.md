### Code
```
class Solution:
    def numberOfLines(self, widths: List[int], S: str) -> List[int]:
        ret = [1, 0]
        units = 100
        for letter in S:
            index = ord(letter) - 97
            diff = units - widths[index]
            if (diff < 0):
                ret[0] += 1
                units = 100 - widths[index]
            else:
                units = diff
        ret[1] = 100 - units
        return ret
```
### Testcase
```
Input: 
widths = [10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10]
S = "abcdefghijklmnopqrstuvwxyz"
Output: [3, 60]
```