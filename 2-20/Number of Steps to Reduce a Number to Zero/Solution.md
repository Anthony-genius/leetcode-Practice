### Code

```
class Solution(object):
    def numberOfSteps (self, num):
        """
        :type num: int
        :rtype: int
        """
        res = 0
        while num != 0:
            if num % 2 == 0:
                num = num//2
                res += 1
            else:
                num -= 1
                res += 1
        return res
```

### Test Case
```
Input: 14
Output: 6
```
```
Input: 8
Output: 4
```
```
Input: 123
Output: 12
```