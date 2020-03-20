### Code
```
class Solution:
    def sumEvenAfterQueries(self, A: List[int], queries: List[List[int]]) -> List[int]:
        res = []
        for val, index in queries:
            A[index] += val
            sum = 0
            for i in A:
                if i%2 == 0:
                    sum += i
            res.append(sum)
        return res
```
### Testcase