//Smallest window containing 0, 1 and 2

function small(arr){

    let minLen = Infinity;
    let freq = {'0':0,'1':0,'2':0};
    let start = 0;

    for(let end=0;end<arr.length;end++){

        let ch = arr[end];
        if(ch in freq) freq[ch]++;

        while(freq['0']>0 && freq['1']>0 && freq['2']>0){
            minLen = Math.min(minLen,end-start+1);
            if(arr[start] in freq) freq[arr[start]]--;
            start++;
        }
    }

    return minLen==Infinity? 0:minLen;
}

console.log(small(['0', '1', '2', '0', '2', '1', '0']))