### Code
class Solution:
    def minimumAbsDifference(self, arr: List[int]) -> List[List[int]]:
        if len(arr) < 2:
            return []
        arr = sorted(arr)
        pair_list = []
        res = []
        diff = abs(arr[1] - arr[0])
        for i in range(len(arr) - 1):
            if abs(arr[i + 1] -arr [i]) <= diff:
                pair_list.append([arr[i], arr[i + 1]])
                diff = abs(arr[i + 1] - arr[i])
        print(pair_list)
        for i in range(len(pair_list)):
            if abs(pair_list[i][1] - pair_list[i][0]) == diff:
                res.append(pair_list[i])
        return res
### Test case
```
Input: [1,4,6,7,8]
Output: [[6,7],[7,8]]
```