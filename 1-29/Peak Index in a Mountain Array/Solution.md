### Code
```
var peakIndexInMountainArray = function(A) {
    return A.indexOf(Math.max(...A));
};
```
### Test case 

>Input: [0,1,0]
>Output: 1

>Input: [0,2,1,0]
>Output: 1

>Input: [0,1,5,3,2,6,4,7,8,3,4,10]
>Output: 11