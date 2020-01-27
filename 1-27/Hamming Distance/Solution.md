#### Code 
```
var hammingDistance = function(x, y) {
    let h = x^y;
    let d = 0;
    while(h!=0) {
        h &= h-1;
        d++;
    }
    return d;
};
```
#### Test case
```
Input: x = 1, y = 4

Output: 2
```
