### Code
```
class Solution:
    def sortArrayByParityII(self, A: List[int]) -> List[int]:
        A.sort(key = lambda x: x%2)
        lst = []
        for i in range(len(A)//2):
            lst.append(A[i])
            lst.append(A[-i-1])
        return lst
```
### Test case
```
Input: [4,2,5,7]
Output: [4,5,2,7]
```
```
Input: [4,2,5,7,9,8]
Output: [4,9,2,7,8,5]
```