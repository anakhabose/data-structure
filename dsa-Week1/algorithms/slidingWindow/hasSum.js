//Check for Subarray with Given Sum (Fixed Size)

function hasSubArrayWithSum(arr,k,target){
    
    let windowSum=0;
    let start=0;
    
    for(let end=0;end<arr.length;end++){
        windowSum+= arr[end];
        
        if(end>=k-1){
            if(windowSum==target) return true;
            windowSum-= arr[start];
            start++;
        }
    }
}

console.log( hasSubArrayWithSum([2, 1, 5, 1, 3, 2], 3, 9))