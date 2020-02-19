### Code
```
from collections import Counter
class Solution(object):
    def commonChars(self, A):
        """
        :type A: List[str]
        :rtype: List[str]
        """
        c = Counter(A[0])
        for i in range(1, len(A)):
            c1 = Counter(A[i])
            for k in c:
                if k not in c1:
                    c[k] = 0
                elif c[k] > c1[k] and c[k] != 0:
                    c[k] = c1[k]
        out = []
        for k in c:
            if c[k] != 0:
                for _ in range(c[k]):
                    out.append(k)
        return out
```

### Testcase
```
Input: ["cool","lock","cook"]
Output: ["c","o"]
```
```
Input: ["bella","label","roller"]
Output: ["e","l","l"]
```