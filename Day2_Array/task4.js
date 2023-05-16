// 4. find the second smallest element in an array

const secondSmallest = (arr) => {
    let min = Infinity;
    let secondSmallest;
    for(let i=0; i<arr.length; i++) {
        if(arr[i] < min) {
            secondSmallest = min;
            min = arr[i];
        } else if(arr[i] > min && arr[i] < secondSmallest) {
            secondSmallest = arr[i]
        }
    }
    return secondSmallest;
}

// const secondSmallest = (arr) => {
//     let min = Math.max(arr[0], arr[1]);
//     let secondSmallest = Math.min(arr[0], arr[1]);
//     for(let i=0; i<arr.length; i++) {
//         if(arr[i] < min) {
//             secondSmallest = min;
//             min = arr[i];
//         } else if(arr[i] > min && arr[i] < secondSmallest) {
//             secondSmallest = arr[i]
//         }
//     }
//     return secondSmallest;
// }


console.log(secondSmallest([11,12,3,4,5]));