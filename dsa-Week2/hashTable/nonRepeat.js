
class hashTable{
    constructor(size){
        this.table=new Array(size);
        this.size=size;
    }
    
    hash(key){
        let total=0;
        for(let i=0;i<key.length;i++){
            total+=key.charCodeAt(i);
        }
        console.log(total%this.size)
        return total%this.size;
    }
    
    set(key,value){
        let index=this.hash(key);
        this.table[index]=value;
        console.log(this.table);
        
    }
    get(key){
        let index=this.hash(key);
        return this.table[index];
    }
    
    nonRepeat(value){
        let result={};
        let chars=[];
        chars=value.split('');
     
        for(let i=0;i<chars.length;i++){
            result[chars[i]]=(result[chars[i]] || 0) +1;
        }
        for(let i=0;i<chars.length;i++){
            if(result[chars[i]]==1){
                return chars[i];
            }
        }
        return null;
    }
    
    display(){
       for(let i=0;i<this.table.length;i++){
           if(this.table[i]){
               console.log(i,this.table[i]);
           }
       }
    }
}

let table = new hashTable(10);
table.set('name','anakha');
table.display();
console.log(table.nonRepeat(table.get('name')));