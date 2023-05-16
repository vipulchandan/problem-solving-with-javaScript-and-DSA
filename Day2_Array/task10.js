// 10. find the number of odd elements in an array

const numOfOdd = (arr) => {
    let count = 0;
    for(let i=0; i<arr.length; i++) {
        if((arr[i] % 2) !== 0) {
            count++;
        }
    }
    return count;
}

console.log(numOfOdd([1,2,3,4,5,11,13]));