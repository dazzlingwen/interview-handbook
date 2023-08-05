const arr1 = [
    {
        id: '121',
        code: 'txt',
    },
    {
        id: '123',
        code: 'txt1'
    }, {
        id: '124',
        code: 'txt2'
    }]

const arr2 = [
    {
        id: '121',
        codeMappingTo: 'txt1',
    },
    {
        id: '123',
        codeMappingTo: 'txt2'
    }, {
        id: '124',
        codeMappingTo: 'txt3'
    }]

const res = [
    {
        id: '121',
        code: 'txt',
        codeMappingTo: 'txt1'
    },
    {
        id: '123',
        code: 'txt1',
        codeMappingTo: 'txt2'
    },
    {
        id: '124',
        code: 'txt2',
        codeMappingTo: 'txt3'
    }]


//第一种：暴力解法
let result = [];
for (let i = 0; i < arr1.length; i++) {
    for (let j = 0; j < arr2.length; j++) {
        if (arr1[i].id === arr2[j].id) {
            result.push({
                id: arr1[i].id,
                code: arr1[i].code,
                codeMappingTo: arr2[j].codeMappingTo
            })
        }
    }
}
console.log(result);
console.log(res === result);

//第二种：封装函数
function merge(arr1, arr2, attrName) {
    let attr = attrName;
    arr2.map((value, index) => {
        arr1[index][attr] = value[attr];
    })
    return arr1;
}

let result = merge(arr1, arr2, 'codeMappingTo');
console.log(result);

//再优雅一点 --- 解构合并或者调用Object.assign()
let obj = arr1.map((item,index) => {
    return {...item,...arr2[index]};
    // return Object.assign(item,arr2[index]);
});
console.log(obj)
