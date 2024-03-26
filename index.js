const batteryBatches = [4, 5, 3, 4, 4, 6, 5];
let totalBatteries = 31
 totalBatteries = batteryBatches.reduce((accumulate,currentBatch) =>{
    return accumulator + currentBatch;
},31);

console.log(totalBatteries);


// Code your solution here
