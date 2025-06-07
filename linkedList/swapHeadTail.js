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

    swapHeadTail(){
        let current=this.head;
        let prev=null;
        while(current.next!=null){
            prev=current;
            current=current.next;
        }
        let tail=current;
        let head=this.head;

        tail.next=head.next;
        prev.next=head;
        head.next=null;

        this.head=tail;
        
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

const list = new linkedList();
list.append(10);
list.append(5);
list.append(3);
list.append(20)

list.print();

list.swapHeadTail();
list.print();

