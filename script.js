class Node {
    constructor(data) {
        this.data = data;
        this.leftNode = null;
        this.rightNode = null;
    }
};

class Tree {
    constructor(array) {
        const sortedArray = array.sort((a, b) => a - b);

        const filteredArray = sortedArray.filter((element, index) => {
            if (element === sortedArray[index + 1]) {
                sortedArray.splice(index, 1);
            }
            return sortedArray;
        });

        this.filteredArray = filteredArray;
        
        this.root = this.buildTree(array);
    };

    buildTree = (array) => {

    }

    printTree = () => {
        console.log(this.filteredArray);
    } 

    printRoot = () => {
        console.log(this.root);
    };
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
 