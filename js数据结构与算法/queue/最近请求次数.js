// 声明一个构造函数 构造函数模式
var RecentCounter = function() {
    //初始化队列
    // const queue = [];
    //这里用this创建全局的队列queue，能够被全局访问
    this.queue = [];
};


//构造函数的原型对象上添加ping方法
RecentCounter.prototype.ping = function(t) {
    this.queue.push(t);
    console.log('ping上的this指向',this)

    //如果不在[t-3000,t]范围内的数字，就将它踢出去
    while(this.queue[0]<t-3000){
        this.queue.shift();
    }
    //此时队列的长度就是最近请求的次数
    return this.queue.length
};

var RecentCounterObj = new RecentCounter();
console.log(RecentCounterObj)
let result = RecentCounterObj.ping(8000)
console.log(result)