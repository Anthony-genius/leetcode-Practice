```
var flipAndInvertImage = function(A) {
    A.map(item=>item.reverse());
    const newA = A.map(item=>{
        const newitem = item.map((e)=>{
            if (e===1) return 0;
                else if (e===0) return 1;
            })
           // console.log(newitem);
            return newitem;
            
        })
        return newA;
    };
```
 ### Test case
    `Input: [[1,1,0],[1,0,1],[0,0,0]]`
    `Output: [[1,0,0],[0,1,0],[1,1,1]]`
---
    `Input: [[1,1,0,0],[1,0,0,1],[0,1,1,1],[1,0,1,0]]`
    `Output: [[1,1,0,0],[0,1,1,0],[0,0,0,1],[1,0,1,0]]`
