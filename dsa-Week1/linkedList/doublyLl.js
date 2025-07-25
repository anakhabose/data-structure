
class Node{
    constructor(data){
        this.data=data;
        this.prev=null;
        this.next=null
    }
}

class doublylinkedlist{
    constructor(){
        this.head=null;
        this.tail=null;
    }

    prepend(data){
        let node = new Node(data);
        if(this.head==null){
            this.head=node;
            this.tail=node;
        }else{
            node.next=this.head;
            this.head.prev=node;
            this.head=node;
        }
    }

    append(data){
        let node = new Node(data);
        if(this.head==null){
            this.head=node;
            this.tail=node;
        }else{
          this.tail.next=node;
          node.prev=this.tail;
          this.tail=node;
        }
    }
    insert(data,index){
        let node=new Node(data);
            if(this.head==null){
                this.prepend(data)
            }else{
                let current=this.head;
                for(let i=0;i<index-1;i++){
                    current=current.next;
                }
                if(!current){
                    this.append(data);
                }else{
                    node.next=current.next;
                    node.prev=current;

                    if(current.next){
                        current.next.prev=node;
                    }
                    current.next=node;   
                }
            }
    }
    delete(data){
        let current=this.head;
        while(current){
            if(current.data==data){
                if(current==this.head){
                    this.head=this.head.next;
                    if(this.head){
                        this.head.prev=null;
                    }

                }else if(current==this.tail){
                    this.tail=this.tail.prev;
                    if(this.tail){
                        this.tail.next=null;
                    }
                
                }else{
                    current.prev.next=current.next;
                    current.next.prev=current.prev;
                }
            }
            current=current.next;
        }
    }

    deleteFrom(index){
        if(!this.head || index<0){
             console.log('Invalid index');
             return;
        }
        if(index==0){
            this.head=this.head.next;
            if(this.head){
                this.head.prev=null;
            }else{
                this.tail=null;
            }
            return;
        }
        let current=this.head;
        for(let i=0;i<index && current!=null;i++){
            current=current.next;
        }
        if(!current){
            console.log('Index out of bounds');
            return;
        }
        if(current===this.tail){
            this.tail=this.tail.prev;
            if(this.tail){
                this.tail.next=null
            }
            return;
        }
        current.prev.next=current.next;
        if(current.next){
            current.next.prev=current.prev;
        }
    }
    reverse(){
        let current=this.head;
        let temp=null;
        while(current){
            temp=current.prev;
            current.prev=current.next;
            current.next=temp;

            current=current.prev;
        }
        if(temp!==null){
            this.head=temp.prev;
        }
    }

    print(){
        let current=this.head;
        let listValues='';
        while(current){
            listValues+=`${current.data} <->`;
            current=current.next;
        }
        console.log(listValues+'NULL');
    }
    
}

let list = new doublylinkedlist();
list.append(3);
list.append(7);
list.append(5);
list.print()

list.prepend(13);
list.print()

list.insert(10,3);
list.print();

list.delete(7);
list.print()

list.deleteFrom(2);
list.print();

list.reverse()
list.print()