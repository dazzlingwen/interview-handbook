/**
 * 题目链接：https://github.com/Sunny-117/js-challenges/issues/9
 * @type {(number|(number|number[])[]|number[])[]}
 */

let a = [1, [2, 3, [[4], 5]], 1, 2, [6, 7]];

function _flatten(arr, deep) {
    let res = [];
    if (deep === 'Infinity') {
        for (const item of arr) {
            if (item instanceof Array) {
                res = res.concat(...item); // 因为是全部拍平，所以动了原数组也没什么影响
            } else {
                res.push(item);
            }
        }
    } else {
        deep--;
        for (const item of arr) {
            // 因为在这个逻辑块里，deep是先--的，所以最后一次会变成0，但又需要执行最后一次的数组拍平，所以deep需要>=0
            if ((item instanceof Array) && deep >= 0) {
                res = res.concat(_flatten(item,deep)); // 这边不能用...item，这样相当于动了原数组，会产生副作用
            } else {
                res.push(item);
            }
        }
    }
    return res;
}

let s = _flatten(a, 2);
console.log(s);
console.log(a.flat(2))

