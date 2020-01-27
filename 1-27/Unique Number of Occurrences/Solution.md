#### Code
```
var uniqueOccurrences = function(arr) {
    let seen = {};
    for (let c of arr) {
        seen[c] = (seen[c] || 0) + 1;
    }
    let res = Object.values(seen);
    return res.length === new Set(res).size
};
```

#### Test case

>Input: arr = [1,2,2,1,1,3]
>Output: true
#
>Input: arr = [1,2]
>Output: false
#
>Input: arr = [-3,0,1,-3,1,1,1,-3,10,0]
>Output: true