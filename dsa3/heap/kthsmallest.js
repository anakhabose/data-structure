
function kthsmallest(arr,k){
    function heapSort(arr){
    let n=arr.length;
    let result;
    for(let i=Math.floor((n-1)/2);i>=0;i--){
        heapify(arr,n,i);
    }
    
    for(let i=n-1;i>=n-k;i--){
        [arr[0],arr[i]]=[arr[i],arr[0]];
        result=arr[i];
        heapify(arr,i,0)
    }
    return result;
}

function heapify(arr,n,i){
    let smallest=i;
    let left = (2*i)+1;
    let right=(2*i)+2;
    if(left<n && arr[left]<arr[smallest]){
        smallest=left;
    }
    if(right<n && arr[right]<arr[smallest]){
        smallest=right;
    }
    if(smallest!=i){
        [arr[i],arr[smallest]]=[arr[smallest],arr[i]];
        heapify(arr,n,smallest);
    }
}
return heapSort(arr);
}

let arr=[1,3,4,8,7,2];
console.log(kthsmallest(arr,3));