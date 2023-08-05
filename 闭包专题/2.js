function fun(n, o) { // ①
    console.log(o);
    return { // ②
        fun: function(m) { // ③
            return fun(m, n); // ④
        }
    };
}

// 第一个例子
var a = fun(0); // 返回undefined
a.fun(1); // 返回 ？
a.fun(2); // 返回 ？
a.fun(3); // 返回 ？

// 第二个例子
var b = fun(0)
    .fun(1)
    .fun(2)
    .fun(3); //undefined,?,?,?

// 第三个例子
var c = fun(0).fun(1);
c.fun(2);
c.fun(3); //undefined,?,?,?
