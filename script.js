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
    };

    buildTree = (array, start, end) => {
        if (start > end) {
            return null;
        }

        let midPoint = start + Math.floor((end - start) / 2);

        let root = new Node(array[midPoint]);
        console.log(node.left);

        root.left = this.buildTree(array, start, midPoint - 1);

        root.right = this.buildTree(array, midPoint + 1, end);

        return root;
    };

    // buildTree = (array) => {
    //     console.log(array);
    //     let first = 0;
    //     let last = array.length - 1;
    //     let midPoint = Math.floor(last / 2);

    //     let root = new Node(array[midPoint]);
    //     root.left = this.buildLeft(array, first, midPoint - 1);
    //     root.right = this.buildRight(array, midPoint + 1, last);
        
    //     console.log(root);

    //     return root;
    // }

    // buildLeft = (array, first, last) => {
    //     if (first > last) {
    //         return null;
    //     }
    //     console.log(`Left Side: first = ${first}, last = ${last}`);

    //     let midPoint = first + Math.floor((last - first) / 2);
    //     let root = new Node(array[midPoint]);

    //     root.left = this.buildLeft(array, first, midPoint - 1);
    // }

    // buildRight = (array, first, last) => {
    //     if (first > last) {
    //         return null;
    //     }
    //     console.log(`Right Side: first = ${first}, last = ${last}`);

    //     let midPoint = first + Math.floor((last - first) / 2);
    //     let root = new Node(array[midPoint]);

    //     root.right = this.buildRight(array, midPoint + 1, last);
    // }

    // printFilteredInput = () => {
    //     console.log(this.filteredArray);
    // } 

    // printRoot = () => {
    //     console.log(this.root);
    // };
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

