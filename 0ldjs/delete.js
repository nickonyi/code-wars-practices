function deleteNth(arr, n) {
    // ...
    const freq = {};
    const result = [];

    for (const num of arr) {
        freq[num] = freq[num] ? freq[num] + 1 : 1;
        if (freq[num] <= n) {
            result.push(num);
        }
    }
    return result;
}