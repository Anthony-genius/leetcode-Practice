### Code
```
class Solution(object):
    def reverseWords(self, s):
        """
        :type s: str
        :rtype: str
        """
        str = ''
        for l in s.split():
            temp = l[::-1]
            str += temp + ' '
        return str.rstrip()
```
```
class Solution(object):
    def reverseWords(self, s):
        """
        :type s: str
        :rtype: str
        """
        return ' '.join(l[::-1] for l in s.split())
```

### Test case
Input: "Let's take LeetCode contest"
Output: "s'teL ekat edoCteeL tsetnoc"