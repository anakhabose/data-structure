
class secondMin{
    constructor(){
        this.mainStack=[];
        this.minStack=[];
    }

    push(data){
        this.mainStack.push(data);
        if(this.minStack.length===0){
            this.minStack.push([data,Infinity]);
        }else{
            let [min,secondMin] = this.minStack[this.minStack.length-1];
            if(data<min){
                this.minStack.push([data,min]);
            }else if(data>min && data<secondMin){
                this.minStack.push([min,data]);
            }else{
                this.minStack.push([min,secondMin]);
            }
        }
    }

    pop(){
        if(this.mainStack.length===0){
            return null;
        }
        this.minStack.pop();
        return this.mainStack.pop();
    }

    getSecondMinm(){
        if(this.minStack.length===0){
            return null;
        }
        return this.minStack[this.minStack.length-1][1];
    }
}

let stack = new secondMin();
stack.push(5);
stack.push(1);
stack.push(3);
stack.push(2);
stack.push(8);
console.log(stack.pop());
console.log(stack.getSecondMinm())
