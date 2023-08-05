//广度优先遍历算法

//1.新建一个队列，把根节点入队
//2.把队头出队并访问
//3.把队头的children挨个入队
//4.重复2、3步，直到队列为空

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

const bfs = (root) => {
    const queue = [root];
    while (queue.length>0){
        const top = queue.shift(); // 队头元素出队
        console.log(top.val); // 访问
        top.children.forEach(item =>{
            queue.push(item);
        })
    }
}

bfs(tree);
