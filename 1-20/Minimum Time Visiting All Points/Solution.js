/**
 * @param {number[][]} points
 * @return {number}
 */
var minTimeToVisitAllPoints = function(points) {
	let time = 0;
    
    for(let i = 1; i < points.length; i++) {
        const x = points[i][0] - points[i-1][0];
        const y = points[i][1] - points[i-1][1];
        
        time += Math.max(Math.abs(x), Math.abs(y));
    }
    
    return time;
};