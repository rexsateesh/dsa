# Algorithms and Data Structure
Algorithms And DataStructure

/*
Sorting (selection, insertion, merge, heap, etc.)
Stacks & Queues
Linked Lists
Trees & Graphs (binary trees, binary search trees, etc.)
Hash tables
Bit manipulation
Dynamic Programming
Backtracking
*/

## Asymptotic Notation
#### Big Oh Notation (O):
Formula: **fn(n) = O(g(n))**
Case: Worst case
Upper Bound: c.g(n) (Function never grows faster than the upper bound)
Must true:
 fn(n) <= c.g(n)

For all n >= no (N not) and c > 0
c must be equal to or greater than 0
no must be greator than 0 (Positive number)

#### Omega Notation(Ω):
Formula: **fn(n) = Ω(g(n))**
Case: Best case
Lower Bound: c.g(n) (Function never grows slowest than the lower bound)
Must true:
 fn(n) >= c.g(n)

For all n >= no (N not) and c > 0
c must be equal to or greater than 0
no must be greator than 0 (Positive number)

#### Theta Notation (θ):
Formula: **fn(n) = θ(g(n))**
Case: Average case
Lower and Upper Bound: c1.g(n) and c2.g(n) (Function never grows slowest/faster than the lower bound and upper bound)
Must true:
 c1.g(n) <= fn(n) <= c2.g(n)

For all n >= no (N not) and c > 0
c must be equal to or greater than 0
no must be greator than 0 (Positive number)

##### Common Asymptotic Notations
- constant	−	Ο(1)
- logarithmic	−	Ο(log n)
- linear		−	Ο(n)
- n log n		−	Ο(n log n)
- quadratic	−	Ο(n2)
- cubic		−	Ο(n3)
- polynomial	−	nΟ(1)
- exponential	−	2Ο(n)

## Greedy approach
- Travelling Salesman Problem
- Prim's Minimal Spanning Tree Algorithm
- Kruskal's Minimal Spanning Tree Algorithm
- Dijkstra's Minimal Spanning Tree Algorithm
- Graph - Map Coloring
- Graph - Vertex Cover
- Knapsack Problem
- Job Scheduling Problem

## divide-and-conquer approach
- Merge Sort
- Quick Sort
- Binary Search
- Strassen's Matrix Multiplication
- Closest pair (points)

## dynamic programming approach
- Fibonacci number series
- Knapsack problem
- Tower of Hanoi
- All pair shortest path by Floyd-Warshall
- Shortest path by Dijkstra
- Project scheduling
