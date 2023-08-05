const binaryTree = require('../binaryTree');

const midorder = (root) => {
    if(!root){
        return;
    }
    midorder(root.left);
    console.log(root.val);
    midorder(root.right);
}

midorder(binaryTree)
