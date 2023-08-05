//去重
const arr = [1, 1, 2, 2];
const arr2 = [...new Set(arr)];// 还需要解构成数组
// const arr2 = new Set(arr) // Set(2) { 1, 2 }
console.log(arr2)


//判断元素是否在集合中
const set = new Set(arr);
const has = set.has(2);

//求交集
const set2 = new Set([2, 3]);
const set3 = new Set([...set].filter(item => set2.has(item)));

console.log([...set3])

let mySet = new Set();
mySet.add(1);
mySet.add(5);
mySet.add(5);// 只取一个
mySet.add({a: 1, b: 2})
let obj = {
    a: 1,
    b: 2
}
mySet.add(obj);// 但是对象能重复添加

console.log(mySet)

mySet.delete(5);

// 如何迭代一个Set对象
for(let item of mySet) console.log(item)

for(let item of mySet.keys()) console.log(item)

for(let item of mySet.values()) console.log(item)

// 可以证明Set中的keys和values是一样的

// Set 转为 Array
mySet = [...mySet];

// or
const myArr = Array.from(mySet);
console.log('myArr',myArr);

