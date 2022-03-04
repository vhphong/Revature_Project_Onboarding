console.log("answer 2");

function zeroesToEnd(numArray) {
    for (let i = 0; i < numArray.length; i++) {
        for (let j = 0; j < numArray.length - 1; j++) {
            if ((numArray[j] == 0) && (numArray[j + 1] != 0)) {
                // swap numArray[j] and numArray[j+1]
                let temp = numArray[j + 1];
                numArray[j + 1] = numArray[j];
                numArray[j] = temp;
            }
        }
    }

    return numArray;
}

console.log(zeroesToEnd([1, 7, 0, 0, 4, 0, 5]));
console.log(zeroesToEnd([0, 0, 2, 0, 5]));
console.log(zeroesToEnd([4, 4, 5]));
console.log(zeroesToEnd([0, 0]));