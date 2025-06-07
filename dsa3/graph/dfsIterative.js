
class Graph {
    constructor() {
        this.adjacencyList = {};
    }

    addVertex(vertex) {
        if (!this.adjacencyList[vertex]) this.adjacencyList[vertex] = [];
    }

    addEdge(vertex1, vertex2) {
        this.adjacencyList[vertex1].push(vertex2);
        this.adjacencyList[vertex2].push(vertex1); // For undirected graph
    }

    dfsIterative(start) {
        let stack = [start];
        let visited = new Set();
        
        while (stack.length > 0) {
            let node = stack.pop();

            if (!visited.has(node)) {
                console.log(node);
                visited.add(node);

                for (let neighbor of this.adjacencyList[node]) {
                    stack.push(neighbor);
                }
            }
        }
    }
}

// Example Usage
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

console.log("DFS Iterative Traversal:");
g.dfsIterative('A');
