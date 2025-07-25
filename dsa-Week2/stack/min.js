
class Minstack{
    constructor(){
        this.stack=[];
        this.minStack=[];
    }

    push(data){
        this.stack.push(data);

        if(this.minStack.length==0 || data<=this.getMin()){
            this.minStack.push(data);
        }
    }

    pop(){
        if(this.stack.length===0){
            return null;
        }
        let popped=this.stack.pop();
        if(popped==this.getMin()){
            this.minStack.pop();
        }
        return popped;
    }

    getMin(){
        return this.minStack.length>0? this.minStack[this.minStack.length-1]:null;
    }
}

let minStack=new Minstack();
minStack.push(40);
minStack.push(20);
minStack.push(30);
minStack.push(10);
console.log(minStack.getMin());
console.log(minStack.pop());
console.log(minStack.getMin());