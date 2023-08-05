/**
 * 题目链接：https://github.com/Sunny-117/js-challenges/issues/41
 * @type {[{name: string, pid: number, id: number},{name: string, pid: number, id: number},{name: string, pid: number, id: number},{name: string, pid: number, id: number},{name: string, pid: number, id: number},null]}
 */

let arr = [
    { id: 1, name: '部门1', pid: 0 },
    { id: 2, name: '部门2', pid: 1 },
    { id: 3, name: '部门3', pid: 1 },
    { id: 4, name: '部门4', pid: 3 },
    { id: 5, name: '部门5', pid: 4 },
    { id: 6, name: '部门6', pid: 0 }
]

function transferList1(data) {
    let res = [];
    // 先找出children
    data.forEach(item => {
        // 这里体现了时间复杂度为O(n^2)，因为有两个循环，forEach和filter
        let childrenArr = data.filter(el => el.pid === item.id);

        if (childrenArr.length) {
            // 给当前对象赋值children属性，并传入子节点
            item.children = childrenArr;
        }

        // 根节点直接推入
        if(item.pid === 0){
            res.push(item);
        }
    })
    return res;
}


// 优化，时间复杂度降为O(n)
// hashmap
function transferList2(data) {
    const list = [];
    const hashmap = {};

    for (let i = 0; i < arr.length; i++) {
        // 存储每个id下的子元素
        let pid = arr[i].pid
        let id = arr[i].id


        if (!hashmap[id]) {
            hashmap[id] = {children:[]}
        }

        hashmap[id] = {...arr[i], children:hashmap[id].children}

        if (pid === 0) {
            list.push(hashmap[id]);
        } else {
            if (!hashmap[pid]) {
                hashmap[pid] = {
                    children:[]
                }
            }
            hashmap[pid].children.push(hashmap[id])
        }
    }
    return list;
}


let s = transferList1(arr);
console.log('test result', s);
