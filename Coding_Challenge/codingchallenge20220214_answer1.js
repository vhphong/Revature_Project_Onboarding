console.log("answer 1");

// let strInput = "How the Avocado Became the Fruit of the Global Trade";
// let strInput = "Why You Will Probably Pay More for Your Christmas Tree This Year";
// let strInput = "Hey Parents, Surprise, Fruit Juice Is Not Fruit";
let strInput = "Visualizing Science";

// filter out , . ? ; : 
console.log('strInput: ' + strInput);
strInput = strInput.replace(/,/gi, " ");

console.log('strInput: ' + strInput);


let strArr = strInput.split(' ');       // strArr = ['How', 'the', 'Avocado', 'Became', ..., 'Trade']

let len = strArr.length;

for (let i = 0; i < len; ++i) {
    strArr[i] = strArr[i].toLowerCase();
}

console.log("strArr[0]: " + strArr[0]);
console.log("strArr[len-1]: " + strArr[len - 1]);

// get length of each string element
let lenArr = [];
for (let i = 0; i < len; ++i) {
    lenArr.push(strArr[i].length);     // lenArr = [3, 3, 7, 6, ..., 5]
}

// sort lenArr
lenArr.sort((a, b) => { return a - b; });                   // lenArr = [3, 3, ..., 5, 6, 6, 7]
console.log("lenArr[0]: " + lenArr[0]);
console.log("lenArr[1]: " + lenArr[1]);



let max1 = lenArr[len - 1] || 0;         // max1 = 7
console.log("max1: " + max1);

let max2 = lenArr[len - 2] || 0;         // max2 = 6
console.log("max2: " + max2);

let max3 = lenArr[len - 3] || 0;         // max3 = 6
console.log("max3: " + max3);

let strArrResult = [];

for (let i = 0; i < len; ++i) {
    if (strArr[i].length == max1) {
        strArr[i] = '#' + strArr[i];    // prefix with #
        strArrResult.push(strArr[i]);
        console.log("strArr[i]: " + strArr[i]);
        break;
    }
}

for (let i = 0; i < len; ++i) {
    if ((strArr[i].length == max2) && (strArr[i] != strArrResult[0])) {
        strArr[i] = '#' + strArr[i];    // prefix with #
        strArrResult.push(strArr[i]);
        console.log("strArr[i]: " + strArr[i]);
        break;
    }
}

for (let i = 0; i < len; ++i) {
    if ((strArr[i].length == max3) && (strArr[i] != strArrResult[1])) {
        strArr[i] = '#' + strArr[i];    // prefix with #
        strArrResult.push(strArr[i]);
        console.log("strArr[i]: " + strArr[i]);
        break;
    }
}