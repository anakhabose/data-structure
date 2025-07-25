//Floyd's algorithm is used here in which we take two pointers slow and fast
/*
 It uses two pointers:

slow moves one step at a time.

fast moves two steps at a time.

If there's a cycle, fast will eventually catch up to slow.
 */


class Node{
    constructor(data){
        this.data=data;
        this.next=null;
    }
}

class linkedList{
    constructor(){
        this.head=null;
        this.length=0;
    }

    prepend(data){
        const node = new Node(data);
        if(this.length==0){
            this.head=node;
        }else{
            node.next=this.head;
            this.head=node;
        }
        this.length++;
    }

    append(data){
        let node = new Node(data);
        if(this.head===null){
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

function hasCycle(head){

    let slow=head;
    let fast=head;

    while(fast && fast.next){
        slow=slow.next;
        fast=fast.next.next;
        if(slow===fast){
            return true;
        }
    }
    return false;
}


const list = new linkedList();

list.append(1);
list.append(2);
list.append(3);
list.append(4);

//list.head.next.next.next.next = list.head.next; // node 4 points to node 2

console.log("Cycle Detected:", hasCycle(list.head)); 





