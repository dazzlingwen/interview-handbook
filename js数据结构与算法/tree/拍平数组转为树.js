let arr = [
    {id: 1, name: '部门1', pid: 0},
    {id: 2, name: '部门2', pid: 1},
    {id: 3, name: '部门3', pid: 1},
    {id: 4, name: '部门4', pid: 3},
    {id: 5, name: '部门5', pid: 4},
]

/**
 * 递归查找，获取children
 */
const getChildren = (data, result, pid) => {
    for (const item of data) {
        if (item.pid === pid) {
            const newItem = {...item, children: []};
            console.log('newItem', newItem);
            result.push(newItem);
            getChildren(data, newItem.children, item.id);
        }
    }
}

/**
 * 转换方法
 */
const arrayToTree = (data, pid) => {
    const result = [];
    getChildren(data, result, pid)
    console.log(result);
    return result;
}

arrayToTree(arr, 0);

