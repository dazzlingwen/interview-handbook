const  binariTree = require('../binaryTree');

//用堆栈来模拟递归
//函数调用堆栈
const preorder = (root) => {
    if(!root){return;}
    const stack = [root];
    // 先访问根节点的值
    while (stack.length){
        const n = stack.pop();
        console.log(n.val);
        // 因为是栈，后进先出，所以写的时候要反过来
        if(n.right) stack.push(n.right);
        if(n.left) stack.push(n.left);
    }
}

preorder(binariTree)
