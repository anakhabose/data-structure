

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
function linkedListToArray(head){
    let arr=[];
    let current=head;
    while(current!=null){
        arr.push(current.data);
        current=current.next;
    }
    return arr;
}


const list = new linkedList();
list.append(10);
list.append(5);
list.append(3)
list.print()
console.log(linkedListToArray(list.head));

