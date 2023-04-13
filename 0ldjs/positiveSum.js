function positiveSum(arr) {
    let result = 0;
    for (let index = 0; index < arr.length; index++) {
        if (arr[index] < 0) {
            arr[index] = 0;
        } else {
            result += arr[index];
        }
    }
    return result;
}