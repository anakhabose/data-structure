//Find the sum of the array elements

function sumArray(arr,index=0){

    if(index==arr.length){
        return 0;
    }
    return arr[index] + sumArray(arr,index+1);
}


console.log(sumArray([2,1,5,8,4,3]));

//Time complexity - O(n)