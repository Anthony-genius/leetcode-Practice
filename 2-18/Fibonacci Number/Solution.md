### Code
```
class Solution(object):
    def fib(self, N):
        if (N <= 1):
            return N
        if (N == 2):
            return 1
        first, second = 0, 1
        i = 1
        while i < N:
            temp = first + second
            first = second
            second = temp
            i += 1
        return second
```

### Test Case
```
Input: 2
Output: 1
```
```
Input: 3
Output: 2
```