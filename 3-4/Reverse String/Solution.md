### Code
```
class Solution:
    def reverseString(self, s: List[str]) -> None:
        """
        Do not return anything, modify s in-place instead.
        """
        if len(s) == 1 or not s:
            return
        first_index = 0
        last_index = len(s) - 1
        middle_index = len(s)//2
        count = 0
        while True:
            s[first_index], s[last_index] = s[last_index], s[first_index]
            first_index += 1
            last_index -= 1
            count += 1
            if count == middle_index:
                break
```
### Testcase
```
Input: ["h","e","l","l","o"]
Output: ["o","l","l","e","h"]
```
```
Input: ["H","a","n","n","a","h"]
Output: ["h","a","n","n","a","H"]
```