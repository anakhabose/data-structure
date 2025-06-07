
class Node{
    constructor(data){
        this.data=data;
        this.left=null;
        this.right=null;
    }
}

class Tree{
    constructor(){
        this.root=null;
    }

    isEmpty(){
        return this.root===null;
    }

    insert(data){
        let node = new Node(data);
        if(this.root===null){
            this.root=node;
        }else{
            this.insertNode(this.root,node);
        }
    }

    insertNode(root,node){
        if(node.data<root.data){
            if(root.left==null){
                root.left=node;
            }else{
                this.insertNode(root.left,node);
            }
        }else{
            if(root.right==null){
                root.right=node;
            }else{
                this.insertNode(root.right,node);
            }
        }
    }

}

let tree = new Tree();
tree.insert(10);
tree.insert(20);
tree.insert(8);
tree.insert(5);
tree.insert(9);
console.log(tree.isEmpty());