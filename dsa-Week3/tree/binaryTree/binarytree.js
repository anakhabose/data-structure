
 class Node{
    constructor(data){
        this.data=data;
        this.left=null;
        this.right=null;
    }
 }

 class BinaryTree{
    constructor(){
        this.root=null;
    }

    insert(data){
        let node = new Node(data);
        if(this.root==null){
            this.root=node;
            return;
        }

        let queue=[this.root];
        while(queue.length){
            let current = queue.shift();
            if(!current.left){
                current.left=node;
                return;
            }else{
                queue.push(current.left);
            }

            if(!current.right){
                current.right=node;
                return;
            }else{
                queue.push(current.right);
            }
        }
    }


    search(data){
        if(!this.root){
            return false;
        }

        let queue=[this.root];
        while(queue.length){
            let current=queue.shift();
            if(current.data==data){
                return true;
            }

            if(current.left) queue.push(current.left);
            if(current.right) queue.push(current.right);
        }
        return false;
    }
    
    preorder(node=this.root,result=[]){
        if(node){
            result.push(node.data);
            this.preorder(node.left,result);
            this.preorder(node.right,result);
        }
        return result;
    }

    inorder(node=this.root,result=[]){
        if(node){
            this.inorder(node.left,result);
            result.push(node.data);
            this.inorder(node.right,result);    
        }
        return result;
    }

    postorder(node=this.root,result=[]){
        if(node){
            this.postorder(node.left,result);
            this.postorder(node.right,result);
            result.push(node.data);
        }
        return result;
    }

    findHeight(node=this.root){
        if(!node){
            return -1;
        }
        let leftHeight=this.findHeight(node.left);
        let rightHeight=this.findHeight(node.right);

        return Math.max(leftHeight,rightHeight)+1;
    }

    findLeftSubtreeHeight(){
        if(!this.root||!this.root.left) return -1;
        return this.findHeight(this.root.left);
    }

    countNodes(node=this.root){
        if(!node){
            return 0;
        }
        let leftCount = this.countNodes(node.left);
        let rightCount = this.countNodes(node.right);

        return leftCount+rightCount+1;
    }

    countLeftSubtreeNodes(){
        if(!this.root || !this.root.left) return 0;

        return this.countNodes(this.root.left);
    }

 }

 let tree = new BinaryTree();
 tree.insert(10);
 tree.insert(20);
 tree.insert(30);
 tree.insert(40);
 tree.insert(50);
 console.log(tree.search(30));

console.log(tree.preorder());
console.log(tree.inorder());
console.log(tree.postorder());

console.log(tree.findHeight());
console.log(tree.countNodes());

console.log(tree.countLeftSubtreeNodes());
console.log(tree.findLeftSubtreeHeight())
