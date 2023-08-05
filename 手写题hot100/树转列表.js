/**
 * 题目链接：https://github.com/Sunny-117/js-challenges/issues/40
 * @type {[{children: [{id: number, text: string, parentId: number}], id: number, text: string, parentId: number}]}
 * 思路：树的深度优先遍历（按照视觉上从上往下遍历）
 */

const tree = [
    {
        id: '1',
        name: '父节点1',
        children: [
            {
                id: '1-1',
                name: '子节点1-1',
                children: [
                    {
                        id: '1-1-1',
                        name: '子节点1-1-1'
                    },
                    {
                        id: '1-1-2',
                        name: '子节点1-1-2'
                    }
                ]
            }
        ]
    },
    {
        id: '2',
        name: '父节点2',
        children: [
            {
                id: '2-1',
                name: '子节点2-1'
            }
        ]
    }
]

// 第一种方法：dfs递归
function transferTree(root) {
    let res = [];
    if (!root) return res;
    root.forEach(item => {
        res.push({
            id: item.id,
            name: item.name,
        })
        if (item.children) {
            res = res.concat(transferTree(item.children)); // 这里是递归实现的核心，容易写成覆盖
        }
    })
    return res;
}


// 第二种方法：栈实现
function queueTree(root) {

}
