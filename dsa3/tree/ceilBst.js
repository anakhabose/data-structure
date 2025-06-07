
class Node{
    constructor(data){
        this.data=data;
        this.left=null;
        this.right=null;
    }
}

function Ceil(root,target){
    let floor=null;
    while(root){
        if(root.data==target){
            return root.data;
        }else if(target>root.data){
            root=root.right;
        }else{
            ceil=root.data;
            root=root.left;
        }
    }
    return ceil;
}

let root=new Node(10);
root.left=new Node(8);
root.left.left=new Node(7);
root.left.right=new Node(9);
root.right=new Node(15);
root.right.left=new Node(12);
root.right.right=new Node(24);

let target=13;

console.log(Ceil(root,target));
