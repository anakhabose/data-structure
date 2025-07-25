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

    insert(data,index){
        if(index<0 || index>this.length ){
             console.log('Index is not valid');
             return
        }
        if(index==0){
            this.prepend(data)
        }
        else{
            let node = new Node(data);
            let current = this.head;
            for(let i=0;i<index-1;i++){
                current=current.next;
            }
            node.next=current.next;
            current.next=node;
            this.length++;
        }
    
    }

    contains(data){
        if(this.length==0){
            console.log('Empty');
            return;
        }else{
            let current = this.head;
            while(current){
                if(current.data==data){
                    console.log('Value found')
                    return;
                }
                current=current.next;
            }
            console.log('Value not found')
            return;
        }
    }

    removeFrom(index){
        if(index<0 || index>=this.length){
            console.log('Invalid index');
            return;
        }else{
            let current = this.head;
            for(let i=0;i<index-1;i++){
                current=current.next;
            }
            let removedNode=current.next;
            current.next=removedNode.next;
        }
        this.length--;
    }
    removeValue(data){
        if(this.length==0){
            console.log('Empty');
            return;
        }
        if(this.head.data==data){
            this.head=this.head.next;
            this.length--;
        }else{
            let removedNode;
            let current = this.head;
            while(current.next && current.next.data!=data){
                current= current.next;
            }

            if(!current.next){
                console.log('Element not found');
                return;
            }

            removedNode = current.next;
            current.next = removedNode.next;
            this.length--;
           
        }
        
    }

    reverseList(){
        if(this.length==0){
            console.log('Empty list');
        }
        let current = this.head;
        let prev = null;
        while(current!=null){
            let nextNode = current.next;
            current.next = prev;
            prev = current;
            current = nextNode;
        }
        this.head=prev;
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

//without using the length

function removeMid(head){
    if(!head || !head.next){
        return null;
    }
    let slow= head;
    let fast = head;
    let prev=null;

     while(fast && fast.next){
        prev=slow;
        slow=slow.next;
        fast=fast.next.next;
     }
     prev.next=slow.next;
     return head;

}

const list = new linkedList();
list.append(10);
list.append(5);
list.append(3)
list.insert(6,2)
//list.insert(1,1)
list.contains(0);
list.print()
// list.removeFrom(2);
// list.print()

// list.removeValue(18)
// list.print()

// list.reverseList();

list.head=removeMid(list.head)
list.print();