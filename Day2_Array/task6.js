// 6. find the average of all elements in an array

const avg = (arr) => {
    let sum = 0;
    for(let i=0; i<arr.length; i++) {
        sum += arr[i]
    }
    return sum / arr.length;
}

console.log(avg([1,2,3,4,5,6]));