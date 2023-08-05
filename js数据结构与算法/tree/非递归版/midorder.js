const binaryTree = require("../binaryTree");

const midorder = (root) => {
    if(!root){
        return;
    }
    const stack = [];
    let p = root; //指针
    while (stack.length || p){ //如果栈非空或者p存在
        while (p){
            stack.push(p);
            p = p.left; //先遍历所有的左子树
        }
        let n = stack.pop();
        console.log(n.val); //访问栈顶元素
        p = n.right; //右节点
    }
}

midorder(binaryTree)
