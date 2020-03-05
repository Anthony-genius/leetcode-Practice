### Code
```
class Solution:
    def numSpecialEquivGroups(self, A: List[str]) -> int:
        fn = lambda s: "".join(sorted(s[::2]) + sorted(s[1::2]))
        return(len(set(fn(s) for s in A)))
```
### Test case
```
Input: ["abcd","cdab","cbad","xyzz","zzxy","zzyx"]
Output: 3
```
```
Input: ["abc","acb","bac","bca","cab","cba"]
Output: 3
```