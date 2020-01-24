### Code
```
var sortArrayByParity = function(A) {
    const evens = A.filter((num) => num % 2 == 0);
    const odds = A.filter((num) => num % 2 == 1);
    evens.push(...odds);
    return evens;
};
```

### Test case
#
>	Input: [3,1,2,4]
>	Output: [2,4,3,1]
