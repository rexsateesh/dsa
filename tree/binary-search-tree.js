class Node {
    constructor(data) {
        this.data = data;
        this.left = null;
        this.right = null;
    }
}

class BinarySearchTree {
    insert(root, data) {
        if (root == null) {
            root = new Node(data);
            return root;
        }

        // Insert into Left tree
        if (root.data > data) {
            root.left = this.insert(root.left, data);
        }

        // Insert into Right tree
        else {
            root.right = this.insert(root.right, data);
        }

        return root;
    }

    inorder(root) {
        if (root == null) {
            return;
        }

        this.inorder(root.left);
        process.stdout.write(root.data + ' ');
        this.inorder(root.right);
    }

    search(root, key) {
        if (root == null) {
            return false;
        }

        if (root.data > key) {
            return this.search(root.left, key);
        }
        else if (root.data == key){
            return true;
        }
        else {
            return this.search(root.right, key);
        }
    }

    delete(root, val) {
        if (root == null) {
            return null;
        }

        if (root.data > val) {
            root.left = this.delete(root.left, val);
        }

        else if (root.data < val) {
            root.right = this.delete(root.right, val);
        }
        else { // root == val
            // Case 1
            // No child (Leaf Node)
            // >> Delete node & Return Null to parent
            if (root.left == null && root.right == null) {
                return null;
            }

            // Case 2
            // One child
            // >> Delete node & replace with child node
            if (root.left == null) {
                return root.right;
            }
            else if (root.right == null) {
                return root.left;
            }

            // Case 3
            // Two children
            // >> Replace value with inorder successor
            // >> Delete the node for inorder successor
            const is = this.inorderSuccessor(root.right);
            root.data = is.data;
            root.right = this.delete(root.right, is.data);
        }

        return root;
    }

    inorderSuccessor(root) {
        while(root.left != null) {
            root = root.left;
        }

        return root;
    }

    printRange(root, x, y) {
        if (root == null) {
            return;
        }

        // case 1 if (x < root < y) then left and right
        if (root.data >= x  && root.data <= y) {
            this.printRange(root.left, x, y);
            process.stdout.write(root.data + ' ');
            this.printRange(root.right, x, y);
        }

        // case 2 if (y > root) right tree
        else if (root.data >= y) {
            this.printRange(root.left, x, y);
        }

        // case 3 if (y < root) left tree
        else {
            this.printRange(root.right, x, y);
        }
    }

    printPath(path) {
        for(let i = 0; i < path.length; i++) {
            process.stdout.write(path[i] + '->');
        }

        process.stdout.write('\n');
    }

    printRootToLeaf(root, path) {
        if (root == null) {
            return;
        }

        path.push(root.data);
        
        // Leaf node then print
        if (root.left == null && root.right == null) {
            this.printPath(path);
        } else { // Non leaf
            this.printRootToLeaf(root.left, path);
            this.printRootToLeaf(root.right, path);
        }

        path.pop();
    }
}

const bst = new BinarySearchTree();
const vals = [8,5,3,1,4,6,10,11,14];
let root = null;

for(let i = 0; i < vals.length; i++) {
    root = bst.insert(root, vals[i]);
}

bst.inorder(root);

// bst.delete(root, 5);

console.log('\n');
// bst.inorder(root);
bst.printRootToLeaf(root, []);