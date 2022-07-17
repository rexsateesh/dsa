class Edge {
    constructor() {
        this.src = null;
        this.dest = null;
        this.weight = null;
    }
}

class Subset {
    constructor() {
        this.parent = null;
        this.rank = null;
    }
}

class Graph {
    constructor(v, e) {
        this.v = v; // Vertices
        this.e = e; // Edges

        // Assign Empty edges
        this.edges = new Array(v);
        for(let i = 0; i < v; i++) {
            this.edges[i] = new Edge();
        }
    }

    /**
     * A utility function to find set of an element i (uses path compression technique)
     * @param {array} subset 
     * @param {int} i
     * @return {Subset[i].parent}
     */
    find(subset, i) {
        // find root and make root as parent of i (path compression)
        if (subset[i].parent != i) {
            subset[i].parent = this.find(subset, subset[i].parent);
        }

        return subset[i].parent;
    }

    /**
     * A function that does union of two sets of x and y (uses union by rank)
     * @param {array} subset 
     * @param {number} x 
     * @param {number} y 
     */
    arrangeRootTree(subset, x, y) {
        let xroot = this.find(subset, x);
        let yroot = this.find(subset, y);

        // Attach smaller rank tree under root
        // of high rank tree (Union by Rank)
        if (subset[xroot].rank < subset[yroot].rank) {
            subset[xroot].parent = yroot;
        }

        else if (subset[xroot].rank > subset[yroot].rank) {
            subset[yroot].parent = xroot;
        }

        // If ranks are same, then make one as
        // root and increment its rank by one
        else {
            subset[yroot].parent = xroot;
            subset[xroot].rank++;
        }
    }

    // The main function to construct MST using Kruskal's algorithm
    KruskalMST() {
        // This will store the resultant MST
        let res = new Array(this.v);

        // An index variable, used for result[]
        let e = 0;

        // An index variable, used for sorted edges
        let i = 0;

        for(i = 0; i < this.v; i++) {
            res[i] = new Edge();
        }

        // Step 1:  Sort all the edges in non-decreasing
        // order of their weight.  If we are not allowed to
        // change the given graph, we can create a copy of
        // array of edges
        this.edges.sort((a, b) => a.weight > b.weight ? 1 : -1);

        // Allocate memory for creating V subsets
        let subsets = new Array(this.v);
        for(let i = 0; i < this.v; i++) {
            subsets[i] = new Subset();
        }

        // Create V subsets with single elements
        for (let v = 0; v < this.v; ++v) {
            subsets[v].parent = v;
            subsets[v].rank = 0;
        }

        i = 0; // Index used to pick next edge

        // Number of edges to be taken is equal to V-1
        while(e < (this.v - 1)) {
            // Step 2: Pick the smallest edge. And increment
            // the index for next iteration
            let nextEdge = this.edges[i++];
            if(!nextEdge) {
                break;
            }

            let x = this.find(subsets, nextEdge.src);
            let y = this.find(subsets, nextEdge.dest);

            // If including this edge doesn't cause cycle,
            // include it in result and increment the index
            // of result for next edge
            if (x != y) {
                res[e++] = nextEdge;
                this.arrangeRootTree(subsets, x, y);
            }
            // Else discard the next_edge
        }

        // print the contents of result[] to display
        // the built MST
        console.log("Following are the edges in the constructed MST");
        let minCost = 0;
        for(let i = 0; i < e; ++i) {
            console.log(res[i].src + ' --> ' + res[i].dest + ' = ' + res[i].weight);
            minCost += res[i].weight;
        }

        console.log("Minimum Cost Spanning Tree " + minCost);
    }
}

 /* Let us create following weighted graph
                 10
            0--------1
            |  \     |
           6|   5\   |15
            |      \ |
            2--------3
                4       */

const v = 5;
const e = v - 1;
const graph = new Graph(v, e);

// add edge 0-1
graph.edges[0].src = 0;
graph.edges[0].dest = 1;
graph.edges[0].weight = 10;

// add edge 0-2
graph.edges[1].src = 0;
graph.edges[1].dest = 2;
graph.edges[1].weight = 6;

// add edge 0-3
graph.edges[2].src = 0;
graph.edges[2].dest = 3;
graph.edges[2].weight = 5;

// add edge 1-3
graph.edges[3].src = 1;
graph.edges[3].dest = 3;
graph.edges[3].weight = 15;

// add edge 2-3
graph.edges[4].src = 2;
graph.edges[4].dest = 3;
graph.edges[4].weight = 4;

graph.KruskalMST();