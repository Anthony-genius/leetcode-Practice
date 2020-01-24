### Code
```
var judgeCircle = function(moves) {
    let x = 0, y = 0;
    const arrmoves = moves.split('');
    arrmoves.forEach(item => {
        if (item == 'L') x--;
        else if (item == 'R') x++;
        else if (item == 'U') y++;
        else if (item == 'D') y--;
    });
    return x == 0 && y == 0;
};
```

### Test case

>Input: "UD"
>Output: true 
#
>Input: "LL"
>Output: false