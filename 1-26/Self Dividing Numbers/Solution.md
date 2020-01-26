### Code
#
```
var selfDividingNumbers = function(left, right) {
    let arr = [];
    for (let i = left; i <= right; i++) {
        let n = i;
        while(n > 0) {
            let d = n % 10;
            if (i % d === 0) {
               n = Math.floor(n/10); 
            } else break;
        }
        if (n === 0) arr.push(i);

    }
    return arr;
};
```
### Test case
#

```
Input: 
left = 1, right = 22
Output: [1, 2, 3, 4, 5, 6, 7, 8, 9, 11, 12, 15, 22]
```