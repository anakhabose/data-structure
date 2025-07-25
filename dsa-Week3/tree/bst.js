
class Node{
    constructor(data){
        this.data=data;
        this.left=null;
        this.right=null;
    }
   
}

class BinarySearchTree{
    constructor(){
        this.root=null;
    }

    isEmpty(){
        return this.root===null;
    }

    insert(data){
        let node = new Node(data);
        if(this.root==null){
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

    search(root,data){
        if(!root){
            return false;
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

    preOrder(root){
        if(root){
            console.log(root.data);
            this.preOrder(root.left);
            this.preOrder(root.right);
        }
    }

    inOrder(root){
        if(root){
            this.inOrder(root.left);
            console.log(root.data);
            this.inOrder(root.right);
        }
    }

    postOrder(root){
        if(root){
            this.postOrder(root.left);
            this.postOrder(root.right);
            console.log(root.data)
        }
    }

    levelOrder(){
        let queue=[];
        queue.push(this.root);
        while(queue.length){
            let curr = queue.shift();
            console.log(curr.data);
            if(curr.left){
                queue.push(curr.left);
            }
            if(curr.right){
                queue.push(curr.right);
            }
        }
    }

    min(root){
        if(!root.left){
            return root.data;
        }else{
            return this.min(root.left);
        }
    }

    max(root){
        if(!root.right){
            return root.data;
        }else{
            return this.max(root.right)
        }
    }

}

let bst = new BinarySearchTree();
console.log('Tree is empty?',bst.isEmpty());

bst.insert(10);
bst.insert(20);
bst.insert(5);


console.log('------------');

console.log(bst.search(bst.root,10));
console.log(bst.search(bst.root,1000));

console.log('------------');

bst.preOrder(bst.root);

console.log('------------');
bst.inOrder(bst.root);

console.log('------------');
bst.postOrder(bst.root);

console.log('------------');
bst.levelOrder();

console.log('------------');
console.log(bst.min(bst.root));

console.log('------------');
console.log(bst.max(bst.root));
