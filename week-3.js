var maxSequence = function(arr) {
    // ...
    let maxSum = arr[0];
    let currSum = arr[0];
    let start = 0;
    let end = 0;
    let maxStart = 0;
    let maxEnd = 0;
    //If the array is empty return 0
    if (arr.length === 0) {
        return 0;
    }
    for (let i = 1; i < arr.length; i++) {
        if (arr[i] > currSum + arr[i]) {
            start = i;
        }

        currSum = Math.max(arr[i], arr[i] + currSum);

        if (currSum > maxSum) {
            maxSum = currSum;
            end = i;
            maxStart = start;
            maxEnd = end;
        }

    }
    return Math.max(maxSum, 0);
}

const a = [-2, -3, 4, -1, -2, 1, 5, -3];
const b = [-2, 1, -3, 4, -1, 2, 1, -5, 4];
const c = [-2, -1, -3, -4, -1, -2, -1, -5, -4];
console.log(maxSequence(c));