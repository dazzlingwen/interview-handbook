const graph = require('./graph')

let visited = new Set();
const dfs = (n) => {
    console.log(n); // 访问根节点
    visited.add(n) // 记录已经访问过的节点
    graph[n].forEach(item => { // 访问相邻节点
        if(!visited.has(item)){
            dfs(item);
        }
    })
}

dfs(2)
