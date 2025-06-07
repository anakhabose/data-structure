

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

function mergedSortedLists(head1,head2){
    if(!head1)  return head2;
    if(!head2)  return head1;

    let dummy = new Node(-1);
    let current = dummy;

    while(head1 && head2){
        if(head1.data<head2.data){
            current.next=head1;
            head1=head1.next;
        }else{
            current.next=head2;
            head2=head2.next;
        }
        current=current.next;
    }
    if(head1) current.next=head1;
    if(head2) current.next=head2;

    return dummy.next;
}


list1= new linkedlist();
list1.append(3);
list1.append(7);
list1.append(9);
list1.print()
list2=new linkedlist()
list2.append(1);
list2.append(2);
list2.append(8);
list2.print()

let mergedHead = mergedSortedLists(list1.head,list2.head);

let mergedList = new linkedlist()
mergedList.head = mergedHead;

mergedList.print();
