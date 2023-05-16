// 2. find the minimum element in an array

const min = (arr) => {
    let minEl = arr[0];
    for(let i=0; i<arr.length; i++) {
        if(arr[i] < minEl) {
            minEl = arr[i];
        }
    }
    return minEl;
}

console.log(min([1,2,3,4,5]));