
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
        return total%this.size;
    }

    set(key,value){
        let index=this.hash(key);
        let i=1;
        while(this.table[index]!==undefined){
            if(this.table[index][0]==key){
                this.table[index][1]=value;
                return;
            }
            index = (index+i)%this.size;
            i++;
        }
        this.table[index] = [key,value];
    }

    get(key){
        let index=this.hash(key);
        let i=1;

        while(this.table[index]!==undefined){
            if(this.table[index][0]==key){
                return this.table[index][1];
            }
            index = (index+i)%this.size;
            i++;
        }
        return undefined;
    }

    remove(key){
        let index=this.hash(key);
        let i=1;

        while(this.table[index]!==undefined){
            if(this.table[index][0]===key){
                this.table[index]=undefined;
                return;
            }
            index=(index+i)%this.size;
            i++;
        }
        return false;
    }

    display(){
        for(let i=0;i<this.size;i++){
            if(this.table[i]!==undefined){
                console.log(i,this.table[i]);
            }
        }
    }
}

let table = new hashTable(10);
table.set('name','anakha');
table.set('mane','aiswarya');

table.display();