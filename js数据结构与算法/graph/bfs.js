const graph = require('./graph')

const visited = new Set();
visited.add(2);
const q = [2]; // 队头
while (q.length){
    const n = q.shift(); // 队列：先进先出
    console.log(n);
    graph[n].forEach(item =>{
        if(!visited.has(item)){
            q.push(item);
            visited.add(item); //在此处添加进历史记录，以避免访问重复元素
        }
    })
}
