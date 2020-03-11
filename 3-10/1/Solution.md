### Code
```
class Solution:
    def findWords(self, words: List[str]) -> List[str]:
        L = ["qwertyuiop", "asdfghjkl", "zxcvbnm"]
        n = 0
        res = []
        while n < len(words):
            word = words[n].lower()
            for row in range(len(L)):
                if word[0] in L[row]:
                    r = row
                    break
            for w in word:
                if w not in L[r]:
                    break
            else: res.append(words[n])
            n += 1
        return res
```
### Test case
```
Input: ["Hello", "Alaska", "Dad", "Peace"]
Output: ["Alaska", "Dad"]
```