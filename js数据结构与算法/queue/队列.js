//先进先出
const queue = [];
queue.push(1); //入队
console.log(queue)
queue.push(2);
console.log(queue)
queue.shift(); //出队
console.log(queue)
queue.shift();
console.log(queue)

// 什么场景用队列
// 食堂排队打饭、js异步中的任务队列、计算最近请求次数等

//js的异步原理
// js中的事件循环与任务队列
setTimeout(()=>console.log(1),0)
console.log(2) //主任务

//2 1