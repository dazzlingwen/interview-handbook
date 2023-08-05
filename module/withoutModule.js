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

const data = api()
const a = handle(data, 'a');
const b = handle(data, 'b');
const c = sum(a, b);
console.log(c);
