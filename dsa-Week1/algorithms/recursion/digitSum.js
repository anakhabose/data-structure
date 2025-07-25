
function digitSum(num){

    if(num === 0){
        return 0;
    }

    return num%10 + digitSum(Math.floor(num/10))
}


console.log(digitSum(123))

//Time complexity - O(n)