### Code
```
from collections import Counter
class Solution(object):
    def countCharacters(self, words, chars):
        d = Counter(chars)
        ans = 0
        for word in words:
            w_d = Counter(word)
            if all(d.get(ch) >= w_d[ch] for ch in word):
                ans += len(word)
        return ans
```

### Test case
```
Input: ["cat","bt","hat","tree"], "atach"
Output: 6
```