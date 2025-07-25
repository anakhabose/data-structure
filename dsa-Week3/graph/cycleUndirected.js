

class Graph{
    constructor(){
        this.adjacencyList={};
    }

    addVertex(vertex){
        if(!this.adjacencyList[vertex]){
            this.adjacencyList[vertex]=[];
        }
    }

    addEdge(vertex1,vertex2){
        this.adjacencyList[vertex1].push(vertex2);
        this.adjacencyList[vertex2].push(vertex1);
    }

    display(){
        for(let vertex in this.adjacencyList){
            console.log(vertex+'->'+[...this.adjacencyList[vertex]]);
        }
    }

    hasCycle(){

        let visited = new Set();

        const dfs = (node,parent)=>{
            visited.add(node);
            
            for(let neighbor of this.adjacencyList[node]){
                if(!visited.has(neighbor)){
                    if (dfs(neighbor,node)){
                        return true;
                    }
                }else if(neighbor!=parent){
                    return true;
                }
            }
            return false;
        }


        for(let vertex in this.adjacencyList){
            if(!visited.has(vertex)){
                if(dfs(vertex,null)){
                    return true;
                }
            }
        }
        return false;
    }
}

let g = new Graph();
g.addVertex('A');
g.addVertex('B');
g.addVertex('C');
g.addVertex('D');
g.addVertex('E');

g.addEdge('A', 'B');
g.addEdge('A', 'C');
g.addEdge('B', 'D');
g.addEdge('C', 'E');
g.addEdge('D', 'E');

g.display();

console.log(g.hasCycle())