class Dijkstra {
	constructor(graph, places, source) {
		this.count = graph.length;
		this.visitedVertex = new Array(this.count);
		this.distance = new Array(this.count);

		for(let i = 0; i < this.count; i++) {
			this.visitedVertex[i] = false; // Set default visited false
			this.distance[i] = Number.MAX_VALUE; // Set default value as infinity
		}

		// Set 0 Distance for source as self wight
		this.distance[source] = 0;

		for(let i = 0; i < this.count; i++) {
			// Update the distance between neighbouring vertex and source vertex
			const u = this.findMinDistance();
			this.visitedVertex[u] = true;

			// Update all the neighbouring vertex distances
			for(let v = 0; v < this.count; v++) {
				if(
					!this.visitedVertex[i] &&
					graph[u][v] != 0 &&
					(this.distance[u] + graph[u][v] < this.distance[v])
				) {
					this.distance[v] = this.distance[u] + graph[u][v];
				}
			}
		}

		// Print the shortest path
		for(let i = 0; i < this.distance.length; i++) {
			console.log(`Distance from ${places[source]} To ${places[i]} is ${this.distance[i]}`);
		}
	}

	findMinDistance() {
		let minDistance = Number.MAX_VALUE;
		let minDistanceVertex = -1;

		for(let i = 0; i < this.distance.length; i++) {
			console.log(i, !this.visitedVertex[i], this.distance[i] < minDistance)
			if (!this.visitedVertex[i] && minDistance !== Number.MAX_VALUE, this.distance[i] < minDistance) {
				minDistance = this.distance[i];
				minDistanceVertex = i;
			}
		}

		return minDistanceVertex;
	}
}

/*
	      A
       /  |  \
      /   |20 \
     /    |    \
 10 /     D     \ 15
   /    /   \    \
  / 25 /     \30  \
 /	  /       \    \
B ---------------- C
        35

Path:
 1 -> 2 dist 10
 2 -> 3 dist 35
 3 -> 1 dist 15
 1 -> 4 dist 20
 2 -> 4 dist 25
 3 -> 4 dist 30
*/

/* Adjacency Matrix
    a   b   c   d
a [ 0, 10, 15, 20]
b [10,  0, 35, 25]
c [15, 35,  0, 30]
d [20, 25, 30,  0]
*/
// const city = ['a','b','c','d'];
// const graph = [
// 	[ 0, 10, 15, 20],
// 	[10,  0, 35, 25],
// 	[15, 35,  0, 30],
// 	[20, 25, 30,  0]
// ];
// const d = new Dijkstra(graph, city, 0);

const Node {
	constructor(char) {
		//
	}
}
