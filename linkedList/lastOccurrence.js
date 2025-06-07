
//Remove the last occurrence of a specific data
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

    append(data){
        let node = new Node(data);
        if(this.head==null){
            this.head=node
        }else{
            let current=this.head;
            while(current.next!=null){
                current=current.next;
            }
            current.next=node;
        }
    }

    removeLast(target){
        let current=this.head;
        let lastOccNode=null;
        let lastOccPrev=null;
        let prev=null;
        while(current){
            if(current.data==target){
                lastOccNode=current;
                lastOccPrev=prev; 
                
            }
            prev=current;
            current=current.next;
        }
        if(!lastOccNode){
            return;
        }
        if(!lastOccPrev){
            this.head=this.head.next;
        }else{
            lastOccPrev.next=lastOccNode.next;
        }
    }

    print(){
        let current=this.head;
        let listValues='';
        while(current){
            listValues+=`${current.data}->`;
            current=current.next;
        }
        console.log(listValues);
    }
}

let list = new linkedList();
list.append(10);
list.append(20);
list.append(30);
list.append(10);
list.append(50);

list.print();

list.removeLast(10);
list.print();