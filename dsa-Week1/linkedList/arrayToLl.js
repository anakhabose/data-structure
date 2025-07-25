

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

function arrayToLinkedList(arr){
    if(arr.length==0) return null;

    let node= new Node(arr[0]);
    let head = node;
    let current=head;
    for(let i=1;i<arr.length;i++){
        current.next=new Node(arr[i]);
        current=current.next;
    }
    return head;
}

let arr=[1,2,3,4];
const list = new linkedList();
list.head=arrayToLinkedList(arr);
list.print()
