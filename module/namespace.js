window.__Module = {
    //调用后端接口
    api() {
        return {
            code: 0,
            data: {
                a: 1,
                b: 2
            }
        };
    },

    //处理后端接口
    handle(data, key) {
        return data.data[key];
    },

    //数据运算
    sum(a, b) {
        return a + b;
    }
}

const m = window.__Module;
const data = m.api()
const a = m.handle(data, 'a');
const b = m.handle(data, 'b');
const c = m.sum(a, b);
console.log(c);
