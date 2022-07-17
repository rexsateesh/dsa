class Graph {
    constructor(vertex, graph) {
        this.vertex = vertex;
        this.graph = graph;

        this.edges = [];
        this.visited = [];

        for(let i = 0; i < vertex.length; i++) {
            this.edges[i] = Number.MAX_VALUE;
            this.visited[i] = false;
        }
    }

    minKey() {
        let min = Number.MAX_VALUE;
        let minIndex;

        for(let v = 0; v < this.vertex.length; v++) {
            if (this.visited[v] == false && this.edges[v] < min) {
                min = this.edges[v];
                minIndex = v;
            }
        }

        return minIndex;
    }

    printMST() {
        this.edges[0] = 0;
        let parent = [-1];

        for(let c = 0; c < this.vertex.length - 1; c++) {
            let u = this.minKey();
            this.visited[u] = true;

            for(let v = 0; v < this.vertex.length; v++) {
                if (
                    this.graph[u][v] && 
                    this.visited[v] == false &&
                    this.graph[u][v] < this.edges[v]
                ) {
                    parent[v] = u;
                    this.edges[v] = this.graph[u][v];
                }
            }
        }

        for(let i = 1; i < parent.length; i++) {
            console.log(`${parent[i]} -> ${i} = ${this.graph[i][parent[i]]}`);
        }
    }

}

/* Let us create the following graph
        2    3
    (A)---(B)---(C)
    |    /   \   |
   6|  8/     \5 |7
    |  /       \ |
    (D) ------- (E)
           9
*/

let vertex = ['A', 'B', 'C', 'D', 'E'];

// Adjacency Matrix
let graph = [
    [0, 2, 0, 6, 0],
    [2, 0, 3, 8, 5],
    [0, 3, 0, 0, 7],
    [6, 8, 0, 0, 9],
    [0, 5, 7, 9, 0]
];

const mst = new Graph(vertex, graph);
mst.printMST();