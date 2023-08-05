(function () {
    var x = 1;

    //调用后端接口
    function api() {
        return {
            code: 0,
            data: {
                a: 1,
                b: 2
            }
        };
    }

    //处理后端接口
    function handle(data, key) {
        return data.data[key];
    }

    //数据运算
    function sum(a, b) {
        return a + b;
    }

    function setX(v) {
        x = v;
    }

    //这里拿到的才是原来的x
    function getX() {
        return x;
    }

    window.__Module = {
        x, //相当于拷贝了一个原来的x，然后在这里导出的是新建的一个x
        api,
        handle,
        sum,
        setX,
        getX
    }
})()

const m = window.__Module;
console.log(m);

console.log('m.x',m.x);
m.x = 2; //这里的x是属于m对象中的属性，赋新值
console.log('更改后',m.x);
console.log('m.getX()',m.getX());//函数作用域+闭包起作用
