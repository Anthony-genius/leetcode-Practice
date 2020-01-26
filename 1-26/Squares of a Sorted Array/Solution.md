### Code
```
var sortedSquares = function(A) {
    const newA = A.map((num) =>num*num)
    return newA.sort((a,b)=>a-b);
};
```
### Test case

>Input: [-4,-1,0,3,10]
>Output: [0,1,9,16,100]
#
#
>Input: [-7,-3,2,3,11]
>Output: [4,9,9,49,121