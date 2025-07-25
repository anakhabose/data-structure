
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
            console.log(vertex+'->'+ this.adjacencyList[vertex].join(', '));
        }
    }

    bfs(start){
        let queue = [start];
        let visited = new Set();
        visited.add(start);

        while(queue.length>0){
            let vertex = queue.shift();
            console.log(vertex);

            for(let adj of this.adjacencyList[vertex]){
                if(!visited.has(adj)){
                    visited.add(adj);
                    queue.push(adj);
                }
            }
        }
    }

}


let g = new Graph();
g.addVertex('A');
g.addVertex('B');
g.addVertex('C');
g.addVertex('D');
g.addEdge('A', 'B');
g.addEdge('A', 'C');
g.addEdge('B', 'D');
g.addEdge('C', 'D');

console.log("BFS Traversal:");
g.bfs('A');