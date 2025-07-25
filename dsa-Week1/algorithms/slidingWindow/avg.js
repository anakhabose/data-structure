//Find Average of All Subarrays of Size k


function averageOfSubarrays(arr,k){
    
    let result = [];
    let windowSum = 0;
    let start = 0;
    
    for(let end=0;end<arr.length;end++){
        windowSum+= arr[end];
        
        if(end>=k-1){
            result.push(windowSum/k);
            windowSum-= arr[start];
            start++;
        }
    }
    
    return result;
}

console.log(averageOfSubarrays([1, 3, 2, 6, -1, 4, 1, 8, 2], 5))