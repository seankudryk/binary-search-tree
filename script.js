class Node {
    constructor(data) {
        this.data = data;
    }
};

class Tree {
    constructor(treeValues) {
        treeValues.forEach(index => {
            let newNode = new Node(index);
            this.tree.push(newNode);
        });
    }

    tree = [];
    root;

    buildTree = (array) => {

    }

    printTree = () => {
        console.log(this.tree);
    }

    prettyPrint = () => {

    }
};

const tree = new Tree([1, 7, 4, 23, 8, 9, 4, 3, 5, 7, 9, 67, 6345, 324]);

tree.printTree();
//test values for buildTree(array)

const prettyPrint = (node, prefix = "", isLeft = true) => {
    if (node === null) {
      return;
    }
    if (node.right !== null) {
      prettyPrint(node.right, `${prefix}${isLeft ? "│   " : "    "}`, false);
    }
    console.log(`${prefix}${isLeft ? "└── " : "┌── "}${node.data}`);
    if (node.left !== null) {
      prettyPrint(node.left, `${prefix}${isLeft ? "    " : "│   "}`, true);
    }
  };
 