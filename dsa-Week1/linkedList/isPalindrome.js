
class Node{
    constructor(data){
        this.data=data;
        this.next=null;
    }
}

class linkedlist{
    constructor(){
        this.head=null;
        this.length=0;
    }

    append(data){
        let node = new Node(data);
        if(this.head==null){
            this.head=node;
        }else{
            let current = this.head;
            while(current.next!=null){
                current=current.next;
            }
            current.next=node;
        }
        this.length++;
    }

     print(){
        if(this.head===null){
            console.log('empty');
        }else{
            let current = this.head;
            let  listValues = '';
            while(current!=null){
                listValues+=`${current.data}->`;
                current = current.next;
            }
            console.log(listValues);
        }
        
    }
}


function isPalindrome(head){
    if(!head || !head.next){
        return true;
    }
    let slow=head;
    let fast = head;
    while(fast && fast.next){
        slow=slow.next;
        fast=fast.next.next;
    }
    
    let prev=null;
    let current=slow;
    while(current){
        let nextNode = current.next;
        current.next=prev;
        prev=current;
        current=nextNode;
    }

    let left=head;
    let right=prev;

    while(right){
        if(left.data!=right.data) return false;
        left=left.next;
        right=right.next;
    }
    return true;
}

let str='madam';
let list = new linkedlist();
str.split('').forEach(char=>list.append(char));
list.print();

console.log('isPalindrome?',isPalindrome(list.head))