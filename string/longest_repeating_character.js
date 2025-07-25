/*
find the longest consecutive repeating characters in string
Input: tryurrrrrtrttrr
output should be rrrrr
*/

function longestRepeat(str){
    
    if(str.length==0) return '';
    
    let maxChar=str[0];
    let maxCount=1;
    let currChar=str[0];
    let currCount=1;
    
    for(let i=1;i<str.length;i++){
        if(str[i]==currChar){
            currCount++;
        }else{
            if(currCount>maxCount){
                maxCount=currCount;
                maxChar=currChar;
            }
            currChar=str[i];
            currCount=1;
        }
    }
    
    if(currCount>maxCount){
        maxCount=currCount;
        maxChar=currChar;
    }
    
    return maxChar.repeat(maxCount);
    
}

console.log(longestRepeat('tryurrrrrtrttrr'))
    


