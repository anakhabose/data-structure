
class Graph{''
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

    dfsRecursive(start,visited= new Set()){
        if(visited.has(start)){
            return;
        }
        console.log(start);
        visited.add(start);

        for(let neighbor of this.adjacencyList[start]){
            this.dfsRecursive(neighbor,visited);
        }
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

console.log('DFS traversal is:');
g.dfsRecursive('A')