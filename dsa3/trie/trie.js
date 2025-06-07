
class TrieNode{
    constructor(){
        this.children={};
        this.isEnd=false;
    }

}

class Trie{
    constructor(){
        this.root=new TrieNode();
    }

    insert(word){
        let node = this.root;
        for(let char of word){
            if(!node.children[char]){
                node.children[char]=new TrieNode()
            }
            node=node.children[char];
        }
        
        node.isEnd=true;
    }

    print(node=this.root,prefix='',result=[]){
        if(node.isEnd){
            result.push(prefix);
        }
        for(let char in node.children){
            this.print(node.children[char],prefix+char,result);
        }
    }

    search(word){
        let node=this.root;
        for(let char of word){
            if(!node.children[char]){
                return false;
            }
            node=node.children[char];
        }
        return node.isEnd;
    }

    startsWith(prefix){
        let node=this.root;
        for(let char of prefix){
            if(!node.children[char]){
                return false;
            }
            node=node.children[char];
        }
        return true;
    }

    countWords(node=this.root){
        let count=0;
        if(node.isEnd){
            count++;
        }
        for(let char in node.children){
            count+=this.countWords(node.children[char]);
        }
        return count;
    }

    autoCompletion(prefix){
        let result = [];
        let node=this.root;
        for(let char of prefix){
            if(!node.children[char]){
                return result;
            }
            node=node.children[char];
        }
        this.collectWords(node,prefix,result);
        return result;
    }

    collectWords(node,prefix,result){
        if(node.isEnd){
            result.push(prefix)
        }
        for(let char in node.children){
            this.collectWords(node.children[char],prefix+char,result);
        }
    }
}

let trie = new Trie();
trie.insert('apple');
console.log(trie.search('apple'));
console.log(trie.search('hello'));
console.log(trie.startsWith('app'));

trie.insert('app');
trie.insert('banana');
console.log(trie.countWords())

console.log(trie.autoCompletion('app'));