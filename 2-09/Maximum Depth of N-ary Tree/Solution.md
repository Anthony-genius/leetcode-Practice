### Code
```
"""
# Definition for a Node.
class Node(object):
    def __init__(self, val=None, children=None):
        self.val = val
        self.children = children
"""
class Solution(object):
    def maxDepth(self, root):
        """
        :type root: Node
        :rtype: int
        """
        if not root:
            return 0
        if all(child == None for child in root.children):
            return 1
        return 1 + max(self.maxDepth(child) for child in root.children)
```

### Test case

```
Input: root = [1,null,3,2,4,null,5,6]
Output: 3
```