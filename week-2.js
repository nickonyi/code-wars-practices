//Day one
function removeEveryOther(arr) {
    //your code here
    return arr.filter((_, index) => index === 0 || index % 2 === 0);

}