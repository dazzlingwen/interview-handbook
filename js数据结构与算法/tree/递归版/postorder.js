const binaryTree = require('../binaryTree');

const postorder = (root) => {
    if(!root){
        return;
    }
    postorder(root.left);
    postorder(root.right);
    console.log(root.val);
}

postorder(binaryTree);
