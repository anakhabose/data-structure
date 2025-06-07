

class MaxStack{
    constructor(){
        this.stack=[];
        this.maxStack=[];
    }

    push(data){
        this.stack.push(data);
        if(this.maxStack.length==0 || data>=this.getMax()){
            this.maxStack.push(data);
        }
    }

    pop(){
        if(this.stack.length===0){
            return null;
        }

        let popped = this.stack.pop();
        if(popped==this.getMax()){
            this.maxStack.pop();
        }
        return popped;
    }

    getMax(){
        return this.maxStack.length>0? this.maxStack[this.maxStack.length-1]:null;
    }
}

let maxStack = new MaxStack();
maxStack.push(10);
maxStack.push(20);
maxStack.push(30);
console.log(maxStack.getMax());
console.log(maxStack.pop());
console.log(maxStack.getMax())
