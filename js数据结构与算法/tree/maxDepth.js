const binaryTree = require('./binaryTree');


var maxDepth1 = function(root) {
    if(!root) return 0
    console.log(maxDepth1(root.left), maxDepth1(root.right))
    console.log(Math.max(maxDepth1(root.left), maxDepth1(root.right)))
    return 1 + Math.max(maxDepth1(root.left), maxDepth1(root.right))
};
let result = maxDepth1(binaryTree);
console.log(result)
