function squareSum(numbers) {
    let result = 0;
    for (i = 0; i < numbers.length; i++) {
        result += numbers[i] ** 2;

    }
    return result;

}