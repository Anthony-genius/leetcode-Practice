### Code
```
var lastStoneWeight = function(stones) {
    while(stones.length >= 2) {
        stones.sort((a,b)=>b-a)
        if (stones[0] == stones[1]) {
            stones.shift()
            stones.shift()
        } else {
            var newval = stones[0] - stones[1]
            stones.splice(0,2,newval)
        }
    }
    if (stones.length == 0 || stones.length == undefined) {
        return 0
    } else {
        return stones[0]
    }
};
```
### Testcase
```
Input: [2,7,4,1,8,1]
Output: 1
```