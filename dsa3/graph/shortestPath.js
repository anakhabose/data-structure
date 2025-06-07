
//Shortest path using bfs

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

    short(start,end){
        let queue=[[start]];
        let visited=new Set();
        visited.add(start);

        while(queue.length>0){
            let path = queue.shift();
            let node = path[path.length-1];

            if(node==end){
                return path;
            }

            for(let adj of this.adjacencyList[node]){
                if(!visited.has(adj)){
                    visited.add(adj);
                    queue.push([...path,adj]);
                }
            }
        }
        return null;
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

console.log("Shortest Path:", g.short('A', 'E'));