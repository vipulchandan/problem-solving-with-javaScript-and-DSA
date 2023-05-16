// 5. find the sum of all elements in an array

const sum = (arr) => {
    let sum = 0;
    for(let i=0; i<arr.length; i++) {
        sum += arr[i];
    }
    return sum;
}

console.log(sum([1,2,3,4,5,6]));
