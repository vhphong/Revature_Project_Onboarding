console.log("answer 2");

function zeroesToEnd(numArray) {
    for (let i = 0; i < numArray.length; i++) {
        for (let i = 0; i < numArray.length - 1; i++) {
            if ((numArray[i] == 0) && (numArray[i + 1] != 0)) {
                // swap numArray[i] and numArray[i+1]
                let temp = numArray[i + 1];
                numArray[i + 1] = numArray[i];
                numArray[i] = temp;
            }
        }
    }

    return numArray;
}

console.log(zeroesToEnd([1, 7, 0, 0, 4, 0, 5]));
console.log(zeroesToEnd([0, 0, 2, 0, 5]));
console.log(zeroesToEnd([4, 4, 5]));
console.log(zeroesToEnd([0, 0]));