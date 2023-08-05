const binaryTree = require('../binaryTree');

const postorder = (root) => {
    if(!root){
        return;
    }
    // 实现倒序输出
    const outputStack = [];
    const stack = [root];
    while (stack.length){
        const n = stack.pop();
        outputStack.push(n)
        if(n.left) stack.push(n.left)
        if(n.right) stack.push(n.right)
    }
    while (outputStack.length){
        const n = outputStack.pop();
        console.log(n.val);
    }
}

postorder(binaryTree);
