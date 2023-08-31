function getObjectValue(obj, keyPath) {
    const keys = keyPath.split('.'); // 将键路径拆分成数组

    let value = obj;
    for (let key of keys) {
        if (value && typeof value === 'object' && key in value) { // value存在 && value数据类型为object && key存在于value中
            value = value[key];
        } else {
            return undefined; // 如果遇到不存在的键或值，则返回 undefined
        }
    }

    return value;
}

const user = {
    name: 'John',
    age: 30,
    address: {
        city: 'London',
        postcode: 'SW1A 1AA'
    }
};

console.log(getObjectValue(user, 'name')); // 输出: "John"
console.log(getObjectValue(user, 'age')); // 输出: 30
console.log(getObjectValue(user, 'address.city')); // 输出: "London"
console.log(getObjectValue(user, 'address.postcode')); // 输出: "SW1A 1AA"
console.log(getObjectValue(user, 'address.country')); // 输出: undefined（不存在的键）
