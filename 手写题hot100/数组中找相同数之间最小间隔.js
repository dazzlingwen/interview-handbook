let arr = [1, 2, 3, 1, 5, 6, 2];
// 统计arr中元素出现的次数
let HashMap = [...new Set(arr)];
let res = [];
HashMap.forEach(item => {
    let num = 0;
    let i = [];
    arr.forEach((el, index) => {
        if (item === el) {
            num++;
            i.push(index);
        }
    })
    res.push({
        el: item,
        num,
        index: i
    })
})
console.log(res);

let singleRes = [];
res.forEach(item => {
    let a = item.index;
    let max = Math.max(...a);
    let min = Math.min(...a);
    let n = max - min - 1;
    singleRes.push(n);
})
console.log(Math.max(...singleRes));
