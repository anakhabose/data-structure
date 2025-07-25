


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

    hasCycleDirected(){

        let visited = new Set();
        let recStack = new Set();

        let dfs = (node)=>{
            if(recStack.has(node)) return true;
            if(visited.has(node)) return false;

            visited.add(node);
            recStack.add(node);

            for(let neighbor of this.adjacencyList[node]){
                if(dfs(neighbor)){
                    return true
                }
            }
            recStack.delete(node);
            return false;
        }

        for(let vertex in this.adjacencyList){
            if(!visited.has(vertex)){
                if(dfs(vertex)){
                    return true;
                }
            }
        }
    }
}

let g = new Graph();
g.addVertex('A');
g.addVertex('B');
g.addVertex('C');
g.addEdge('A', 'B');
g.addEdge('B', 'C');
g.addEdge('C', 'A'); 

console.log(g.hasCycleDirected()); 