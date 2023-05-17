// 3. find the second largest element in an array

const secondLargest = (arr) => {
    let max = -Infinity;
    let secondLargest;
    for(let i=0; i<arr.length; i++) {
        if(arr[i] > max) {
            secondLargest = max;
            max = arr[i];
        } else if(arr[i] < max && arr[i] > secondLargest) {
            secondLargest = arr[i];
        }
    }
    return secondLargest;
}

// const secondLargest = (arr) => {
//     let max = Math.min(arr[0], arr[1]);
//     let secondLargest = Math.max(arr[0], arr[1]);
//     for(let i=2; i<arr.length; i++) {
//         if(arr[i] > max) {
//             secondLargest = max;
//             max = arr[i];
//         } else if(arr[i] < max && arr[i] > secondLargest) {
//             secondLargest = arr[i];
//         }
//     }
//     return secondLargest;
// }


console.log(secondLargest([1,2,3,4,15,11,25]));