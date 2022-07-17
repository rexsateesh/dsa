
/* Let us create the following graph
        2    3
    (0)---(1)---(2)
    |    /   \   |
   6|  8/     \5 |7
    |  /       \ |
    (3) ------- (4)
           9
*/

let graph = [
    [0, 2, 0, 6, 0],
    [2, 0, 3, 8, 5],
    [0, 3, 0, 0, 7],
    [6, 8, 0, 0, 9],
    [0, 5, 7, 9, 0]
];
let vertex = [0, 1, 2, 3, 4];

class Graph {
    constructor(vertex, graph) {
        this.graph = graph;
        this.vertex = vertex;
        this.key = [];
        this.visited = [];
        this.parent = [];

        for(let i = 0; i < this.vertex.length; i++) {
            this.key[i] = Number.MAX_VALUE;
            this.visited[i] = false;
        }
    }

    minKey() {
        let min = Number.MAX_VALUE;
        let minIndex;

        for(let i = 0; i < this.vertex.length; i++) {
            if(this.visited[i] == false && this.key[i] < min) {
                min = this.key[i];
                minIndex = i;
            }
        }

        return minIndex;
    }

    // Minimum spanning tree
    findMST() {
        this.key[0] = 0;
        this.parent[0] = -1;

        for(let c = 0; c < this.vertex.length - 1; c++) {
            let u = this.minKey(); // Get minimum element key

            this.visited[u] = true; // Set visited True

            for(let v = 0; v < this.vertex.length; v++) {
                if(
                    this.graph[u][v] &&
                    this.visited[v] == false && 
                    this.graph[u][v] < this.key[v]
                ) {
                    this.parent[v] = u;
                    this.key[v] = this.graph[u][v];
                }
            }
        }

        for (let i = 1; i < this.parent.length; i++) {
            console.log(`${this.parent[i]} -> ${i} -> ${this.graph[i][this.parent[i]]}`);
        }
    }
}

const mst = new Graph(vertex, graph);
mst.findMST();