
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
            if(root.right===null){
                root.right=node;
            }else{
                this.insertNode(root.right,node);
            }
        }
    }

     search(root,data){
        if(!root){
            return null;
        }else{
            if(root.data==data){
                return true;
            }else if(data<root.data){
                return this.search(root.left,data);
            }else{
                return this.search(root.right,data);
            }
        }
    }

    inorderSuccessor(root,target){
        let targetNode = this.search(root, target);
        if(!targetNode){
            return null;
        }

        let successor=null;
        let curr=root;
        while(curr){
            if(target<curr.data){
                successor=curr;
                curr=curr.left;
            }else{
                curr=curr.right;
            }
        }
        return successor;
    }

}

let tree = new  Tree();
tree.insert(10);
tree.insert(20);
tree.insert(8);
tree.insert(5);
tree.insert(9);
tree.insert(15);
tree.insert(17)
console.log(tree.isEmpty());


let successor = tree.inorderSuccessor(tree.root,10)
console.log(successor?successor.data:'no successor');
