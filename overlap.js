/*
Input: intervals = [[1,3],[2,6],[8,10],[15,18]]
Output: [[1,6],[8,10],[15,18]]
Explanation: Since intervals [1,3] and [2,6] overlaps, merge them into [1,6].
*/

// let intervals = [[1,3], [2,6], [8,10], [15,18]];
let intervals = [[1,4],[4,5]];
console.log (intervals);
let tempArr = [];
let outArr = [];

tempArr.push ({"first" : intervals[0][0], "second" : intervals[0][1] });

for (let i=0; i<intervals.length; i++) {
    
    let x1 = intervals[i][0];
    let y1 = intervals[i][1];

    if (i < intervals.length -1 ) {
        var x2 = intervals[i+1][0];
        var y2 = intervals[i+1][1];
    }

    if (y1 >= x2) {
        // next one is less than first one
        tempArr[tempArr.length -1].second = y2;
    } else {
        // next one is greater than first one
        tempArr.push ({"first" : x2, "second" : y2 });
    }
}

tempArr.forEach(value => {
    outArr.push ([value.first, value.second]);
});

console.log (outArr);


