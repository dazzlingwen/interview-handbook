//栈 后进先出
const stack = []
//入栈
stack.push(1);
stack.push(2);

const item1 = stack.pop();//出栈
const item2 = stack.pop();

//什么场景下用栈？
//比如 十进制转二进制、判断字符串的括号是否有效、函数调用堆栈...

//函数调用堆栈
function greeting() {
    sayHi();//最早执行完
}

function sayHi() {
    return 'hello';
}

greeting();
//最后调用的函数，最先执行完

const fn1 = () => {
    fn2()
}
const fn2 = () => {
    fn3()
}
const fn3 = () => {
}

fn1()

