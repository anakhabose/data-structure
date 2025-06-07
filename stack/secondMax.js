
//Get the secondMax in the time complexity of O(1).

class SecondMaxStack {
    constructor() {
        this.mainStack = [];
        this.maxStack = []; 
    }

    push(val) {
        this.mainStack.push(val);

        if (this.maxStack.length === 0) {
            this.maxStack.push([val, -Infinity]);
        } else {
            let [max, secondMax] = this.maxStack[this.maxStack.length - 1];
            if (val > max) {
                this.maxStack.push([val, max]); 
            } else if (val > secondMax) {
                this.maxStack.push([max, val]); 
            } else {
                this.maxStack.push([max, secondMax]); 
            }
        }
    }

    pop() {
        if (this.mainStack.length === 0) return null;
        this.maxStack.pop();
        return this.mainStack.pop();
    }

    getSecondMax() {
        if (this.maxStack.length === 0) return null;
        return this.maxStack[this.maxStack.length - 1][1];
    }
}


const stack = new SecondMaxStack();
stack.push(5);
stack.push(1);
stack.push(10);
stack.push(7);

console.log(stack.getSecondMax()); 
stack.pop();
console.log(stack.getSecondMax());
