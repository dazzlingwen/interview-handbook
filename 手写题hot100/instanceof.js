/**
 * 题目链接：https://github.com/Sunny-117/js-challenges/issues/32
 * @param A 要判断的变量
 * @param B 判断对应的类型
 * 思路：判断的核心在于：A.__proto__ === B.prototype 为true
 */

function myInstanceof(A, B) {
    let p = A;
    p.__proto__ = undefined; //初始化
    while (p) {
        if (p === B.prototype) {
            return true;
        }
        p = p.__proto__;
    }
    return false;
}
