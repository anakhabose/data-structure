
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
        let node=new Node(data);
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
        let current=this.head;
        let listValues=``;
        while(current){
            listValues+=`${current.data}->`;
            current=current.next;
        }
        console.log(listValues);
    }

}

//Remove duplicates from a sorted list

function removeDuplicates(head){
    let current=head;
    while(current && current.next){
        if(current.data==current.next.data){
            current.next=current.next.next;
        }else{
            current=current.next
        }
    }
    return head;
}

let list = new linkedList();

list.append(3);
list.append(4);
list.append(4);
list.append(5);
list.append(5);
list.append(5);
list.append(6);

list.print();

list.head=removeDuplicates(list.head);
list.print()
