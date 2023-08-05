// 返回的这个新函数（指代foo）只能执行一次，再次执行会返回上一次的结果
function once(func) {
    // 在这里补充完整
    let used = false;
    let ans = null;
    return function () { // 闭包
        if (used) {
            return ans; // 如果发现函数已经执行过，就返回上一次的结果
        }
        // 新增一个开关，用来标记
        used = true;
        // 先实现能够正常返回和执行函数内容
        ans = func(); // 保持对这个变量的引用，ans这个变量存储的是函数的执行结果，也就是return回来的那个值，这个地方保证了函数只执行一次
        return ans;
    }
}
let i = 0;
const foo = once(()=>{
    i++;
    return i;
})

console.log(foo());
console.log(foo());
console.log(foo());
console.log(foo());
console.log(foo());

// let test = () => {
//     i++;
//     return i;
// }
// let res = test();
// console.log(res); // 这个res 就相当于return回来的那个 i

let test = () => {
    i++;
    return i;
}
test();
test(); // 这里证明每次只要调用函数，就会让i叠加
console.log(i);
