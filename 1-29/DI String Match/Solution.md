### Code
```
var diStringMatch = function(S) {
    let max = S.length;
    let min = 0;
    let MatchList = [];
    for (let i = 0; i <= S.length; i++) {
        if (S[i] == "I") {
            
            MatchList.push(min)
            ++min;
        }
        else {
            MatchList.push(max)
            max--;
        }
    }
    return (MatchList)
};
```
### Test case

>Input: "IDID"
>Output: [0,4,1,3,2]
#
>Input: "III"
>Output: [0,1,2,3]
#
>Input: "DDI"
>Output: [3,2,0,1]