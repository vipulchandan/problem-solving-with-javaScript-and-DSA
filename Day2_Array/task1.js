// 1. find the maximum element in an array


const max = (arr) => {
    let maxEl = arr[0];
    for(let i=0; i<arr.length; i++) {
        if(arr[i] > maxEl) {
            maxEl = arr[i];
        }
    }
    return maxEl;
};

// const max = (arr) => {
//     for(let i=0; i<arr.length-1; i++) {
//         if(arr[i] > arr[i+1]) {
//             return arr[i];
//         }
//     }
//     return arr[arr.length-1];
// };

console.log(max([1,2,3,4,5]));