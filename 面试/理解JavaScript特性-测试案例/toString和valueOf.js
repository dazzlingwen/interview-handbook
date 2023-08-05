/** 场景：想要将引用类型转换成 String
 *  - 如果定义了 toString，则优先调用 toString()，原始值转成字符串表示
 *  - 定义了 valueOf，会再调用 valueOf()，原始值转化成字符串表示
 *  如果上述返回都不是原始值，那么会抛出一个异常 TypeError: Cannot convert object to primitive value
 * */

let a = [];
// 重写a身上的toString方法
a.toString = function (){
    console.log('执行了toString');
    // return typeof a;
    return [];
}

a.valueOf = function (){
    console.log('执行了valueOf');
    return [];
}

// console.log(String(a));
String(a);
