/**
 * @param {string} s
 * @return {number}
 */
var balancedStringSplit = function(s) {
    let lcount = 0, rcount = 0, count=0;
    for(let c of s){
        if(c === "R") rcount++;
        else if(c==="L") lcount++;
        if(lcount==rcount) count++
        
    }
    return count;
};
