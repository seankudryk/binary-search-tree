class Node {
    constructor(data) {
        this.data = data;
        this.left = null;
        this.right = null;
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
        this.start = 0;
        this.end = filteredArray.length - 1;
        
        this.root = this.buildTree(filteredArray, this.start, this.end);
        console.log(this.root.left.left.right);
    };

    buildTree = (array, start, end) => {
        if (start > end) {
            return null;
        }

        let midPoint = start + Math.floor((end - start) / 2);

        let root = new Node(array[midPoint]);

        root.left = this.buildTree(array, start, midPoint - 1);

        root.right = this.buildTree(array, midPoint + 1, end);

        return root;
    };

    printFilteredInput = () => {
        console.log(this.filteredArray);
    } 

    printRoot = () => {
        console.log(this.root);
    };
};

const tree = new Tree([1, 7, 4, 23, 8, 9, 4, 3, 5, 7, 9, 67, 6345, 324]);
// tree.printFilteredInput();

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

prettyPrint(tree.root);

