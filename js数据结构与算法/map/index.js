//字典：数据唯一、以键值对存储
const data = new Map();

//增
data.set('x', 1);
data.set('y', 2);
console.log(data);

//删
data.delete('x');
// data.clear()

//改
data.set('x', 45);
console.log('data', data);

console.log(data.get('x')); //45
console.log('keys', data.keys());
console.log('values', data.values());

console.log('entries', data.entries());


//Map数据结构远远不止这些
const dataMap = new Map();
dataMap.set('name', 'lw').set('sex', '女');
console.log(dataMap)
console.log(dataMap.entries())//entries把数据格式转换成了键值对数组的形式
for (let [key, val] of dataMap.entries()) {
    console.log(key + '=' + val)
}
