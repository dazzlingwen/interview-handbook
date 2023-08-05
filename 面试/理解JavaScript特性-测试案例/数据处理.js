let arr = [
    {name: 'a', value: [1, 2]},
    {name: 'b', value: [3]},
    {name: 'a', value: [4, 5]}
]

let arr2 = [];
[
    { name: "a", val: [1, 2] },
    { name: "b", val: [4, 3] },
    { name: "a", val: [5, 6] },
].forEach(item => {
    const jtem = arr2.find(jtem => jtem.name == item.name); //find方法返回第一个匹配元素
    if (!jtem) return arr2.push(item);
    const index = arr2.findIndex(jtem => jtem.name == item.name);
    arr2[index].val = [...arr2[index].val, ...item.val]
})
console.log(arr2);


