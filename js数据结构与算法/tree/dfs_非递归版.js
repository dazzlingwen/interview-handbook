const tree = [
    {
        id: 1,
        children: [
            { id: 11 },
            { id: 12 }
        ]
    },
    {
        id: 2,
        children: [
            { id: 21 },
            {
                id: 22,
                children: [
                    { id: 221 }
                ]
            }
        ]
    }
]

const iteration = (tree) => {
    if (!tree.length) {
        return [];
    }
    const ans = [];
    const stack = [];
    const nextIndex = new Map();
    let node = { children: tree };
    while (stack.length || node) {
        while (node) {
            ans.push(node);
            stack.push(node);
            if (!node.children?.length) {
                break;
            }
            nextIndex.set(node, 1);
            node = node.children[0];
        }
        node = stack[stack.length - 1];
        const i = nextIndex.get(node);
        if (i < node.children?.length) {
            nextIndex.set(node, i + 1);
            node = node.children[i];
        } else {
            stack.pop();
            nextIndex.delete(node);
            node = null;
        }
    }
    ans.shift();
    return ans;
}


let res  = iteration(tree);
console.log(res);
