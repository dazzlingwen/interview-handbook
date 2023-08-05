const json = {
    a: {b: {c: 1}},
    d: [1, 2]
}

const dfs = (n, path) => {
    Object.keys(n).forEach(k => {
        dfs(n[k], path.concat(k));
    })
}

dfs(json, [])

const tree = {
    val: 'a',
    children: [
        {
            val: 'b',
            children: [
                {
                    val: 'd',
                    children: [],
                },
                {
                    val: 'e',
                    children: [],
                }
            ],
        },
        {
            val: 'c',
            children: [
                {
                    val: 'f',
                    children: [],
                }, {
                    val: 'g',
                    children: [],
                }
            ],
        }
    ],
}

const dfs_fir = (root) => {
    console.log(root.val);
    // root.children.forEach((child)=>{dfs_fir(child)});
    root.children.forEach(dfs_fir);
}

dfs_fir(tree);

//取树的深度 方法一
var maxDepth1 = function(root) {
    if(root === null) return 0
    return 1 + Math.max(maxDepth1(root.left), maxDepth1(root.right))
};

//取树的深度 方法二
/**
 * @param {TreeNode} root
 * @return {number}
 */
var maxDepth2 = function (root) {
    let ans = 0;

    const dfs = function (node, depth) {
        if (node === null) {
            return;
        }
        if (node.left === null && node.right === null) {
            ans = Math.max(ans, depth);
        }

        dfs(node.left, depth + 1);
        dfs(node.right, depth + 1);
    }

    dfs(root, 1);

    return ans;
};
