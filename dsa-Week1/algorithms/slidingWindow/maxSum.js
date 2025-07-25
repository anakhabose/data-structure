//Find Maximum Sum of Subarray of Size k 
//Fixed-size window

function max(arr,k){
    
    let maxSum=0;
    let windowSum=0;
    
    for(let i=0;i<k;i++){
        windowSum+=arr[i];
    }
    maxSum=windowSum;
    
    for(let i=k;i<arr.length;i++){
        windowSum+= arr[i] - arr[i-k];
        maxSum = Math.max(windowSum,maxSum);
    }
    
    return maxSum;
}


console.log(max([1,3,6,2,0,9,5],3))

//Time Complexity = O(n)