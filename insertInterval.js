let intervals = [[1,3],[6,9]];
let newInterval = [2,5];
let tempInsertInterval = [];

intervals.forEach(interval => {
    if (interval[0] >= newInterval[1]) {
        tempInsertInterval.push ([newInterval[0], newInterval[1]]);
    }

    tempInsertInterval.push ([interval[0], interval[1]]);
});

let tempOutput = [];

tempOutput.push ({"first" : tempInsertInterval[0][0], 
                    "second": tempInsertInterval[0][1] });

tempInsertInterval.forEach((value, index) => {
    console.log (value);

    let x1 = tempInsertInterval[index][0];
    let y1 = tempInsertInterval[index][1];

    if (index < tempInsertInterval.length -1) {
        var x2 = tempInsertInterval[index + 1][0];
        var y2 = tempInsertInterval[index + 1][1];
    }

    if (y1 >= x2) {
        tempOutput[tempOutput.length -1].second = y2;
    } else {
        if (x2 && y2) {
            tempOutput.push({"first": x2, "second": y2 });
        }
    }

});

console.log (tempOutput);