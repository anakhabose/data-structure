//Smallest Subarray with Sum ≥ S
//Variable-size window 

function minSubArrayLen(s,arr){
    
    let minLen = Infinity;
    let windowSum = 0;
    let start = 0;

    for(let end=0;end<arr.length;end++){
        windowSum+= arr[end];

        while(windowSum>=s){
            minLen = Math.min(minLen, end-start+1);
            windowSum-= arr[start];
            start++;
        }
    }

    return minLen === Infinity? 0: minLen;
}

console.log(minSubArrayLen(7,[2, 3, 1, 2, 4, 3]))

//Time Complexity = O(n)