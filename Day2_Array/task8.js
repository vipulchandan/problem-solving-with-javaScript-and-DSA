// 8. find the sum of all odd elements in an array

const sumOfOdd = (arr) => {
    let sum = 0;
    for(let i=0; i<arr.length; i++) {
        if((arr[i] % 2) !== 0) {
            sum += arr[i];
        }
    }
    return sum;
}

console.log(sumOfOdd([1,2,3,4,5,6,7]));