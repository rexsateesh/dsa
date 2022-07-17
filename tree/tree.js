class Queue {
    constructor() {
        this.arr = [];
    }

    add(i) {
        this.arr.push(i);
    }

    isEmpty() {
        return this.arr.length === 0;
    }

    remove() {
        return this.arr.shift();
    }
}

class Node {
    constructor(data) {
        this.data = data;
        this.left = null;
        this.right = null;
    }
}

class TreeInfo {
    constructor(height, diam) {
        this.height = height;
        this.diam = diam;
    }
}

class BinaryTree {
    static idx = -1;

    static buildTree(nodes) {
        this.idx++;
        if(nodes[this.idx] == -1) {
            return null;
        }

        const newNode = new Node(nodes[this.idx]);
        newNode.left = this.buildTree(nodes);
        newNode.right = this.buildTree(nodes);

        return newNode;
    }

    preorder(root) {
        if(root == null) {
            return;
        }

        console.log(root.data); // Root
        this.preorder(root.left); // Left SubTree
        this.preorder(root.right) // Right SubTree
    }

    inorder(root) {
        if (root == null) {
            return;
        }

        this.inorder(root.left); // Left SubTree
        console.log(root.data); // Root
        this.inorder(root.right); // Right SubTree
    }

    postorder(root) {
        if (root == null) {
            return;
        }

        this.postorder(root.left); // Left SubTree
        this.postorder(root.right); // Right SubTree
        console.log(root.data); // Root
    }

    levelOrder(root) {
        const q = new Queue();
        q.add(root);
        q.add(null);

        while(!q.isEmpty()) {
            let node = q.remove();
            if (node == null) {
                process.stdout.write('\n');
                if (q.isEmpty()) {
                    break;
                } else {
                    q.add(null);
                }
            } else {
                process.stdout.write(node.data + '');
                if (node.left != null) {
                    q.add(node.left);
                }

                if (node.right != null) {
                    q.add(node.right);
                }
            }
        }
    }

    count(root) {
        if(root == null) {
            return 0;
        }

        const leftNode = this.count(root.left);
        const rightNode = this.count(root.right);

        return leftNode + rightNode + 1;
    }

    sum(root) {
        if (root == null) {
            return 0;
        }

        const leftSum = this.sum(root.left);
        const rightSum = this.sum(root.right);

        return leftSum + rightSum + root.data;
    }

    height(root) {
        if (root == null) {
            return 0;
        }

        const leftHeight = this.height(root.left);
        const rightHeight = this.height(root.right);

        return Math.max(leftHeight, rightHeight) + 1;
    }

    diameter(root) {
        if (root == null) {
            return 0;
        }

        let diam1 = this.diameter(root.left);
        let diam2 = this.diameter(root.right);
        let diam3 = this.height(root.left) + this.height(root.right) + 1;

        return Math.max(diam3, Math.max(diam1, diam2));
    }

    diameter2(root) {
        if (root == null) {
            return new TreeInfo(0, 0);
        }

        const leftTree = this.diameter2(root.left); // Left Tree height
        const rightTree = this.diameter2(root.right); // Right Tree height
        let myHeight = Math.max(leftTree.height, rightTree.height) + 1;

        /**
         * Diameter Reference
           /\         
          /  \
         /    \
         */
        let diam1 = leftTree.diam;
        let diam2 = rightTree.diam;
        let diam3 = leftTree.height + rightTree.height + 1;

        return new TreeInfo(myHeight, Math.max(diam3, Math.max(diam1, diam2)));
    }

    isIdentical(root, subTree) {
        if (root == null && subTree == null) {
            return true;
        }

        if (root == null || subTree == null) {
            return false;
        }

        if (root.data == subTree.data) {
            return this.isIdentical(root.left, subTree.left) && this.isIdentical(root.right, subTree.right);
        }

        return false;
    }

    isSubTree(root, subTree) {
        if (subTree == null) {
            return true;
        }

        if (root == null) {
            return false;
        }

        if (root.data === subTree.data) {
            if (this.isIdentical(root, subTree)) {
                return true;
            }
        }

        return this.isSubTree(root.left, subTree) || this.isSubTree(root.right, subTree);
    }

    sumOfKthLevel(root, kth) {
        if (root == null) {
            return 0;
        }

        if (kth == 0) {
            return root.data;
        }

        let sum = 0;
        let level = 0;
        const q = new Queue();

        q.add(root);
        q.add(null);

        level++; // increase level
        
        while(!q.isEmpty()) {
            let e = q.remove(); // Fetch First item from queue

            // If element is null
            if (e == null) {
                // If empty queue then break the loop
                if (q.isEmpty()) {
                    break;
                } 
                
                // If Queue is not empty then add null into queue and increase level by 1
                else {
                    q.add(null);
                    level++;
                }
                
                continue;
            }

            // Level is equal to Kth position then sum data    
            else if (level == kth) {
                sum += e.data;
            }
            
            // Add to queue if not empy
            if (e.left !== null) {
                q.add(e.left);
            }

            // Add to queue if not empy
            if (e.right !== null) {
                q.add(e.right);
            }
        }

        return sum;
    }
}

/**

       1
     /   \
    2     3
   / \     \
  4   5     6


 */

let nodes = [1,2,4,-1,-1,5,-1,-1,3,-1,6,-1,-1];
const binaryTree = new BinaryTree();
const root = BinaryTree.buildTree(nodes);

// const subTree = new Node(2);
// subTree.left = 4;
// subTree.right = 5;
// console.log(subTree);
// console.log(binaryTree.isSubTree(root, subTree));

console.log(binaryTree.sumOfKthLevel(root, 3));
