let arr = [1,2,[3,4,[5,6]]];

// console.log(arr.flat(2));

//手写flat，数组拍平

// flatten([1, 2, [3, 4], 5]) 输出 [1, 2, 3, 4, 5]
// flattenDeep([1, [2, [3, 4]], 5]) 输出 [1, 2, 3, 4, 5]
function flatten(arr){
    let newArr = [];
    arr.map(item=>{
        if(item instanceof Array){
            newArr = arr.concat(...item)
        }else{
            newArr.push(item)
        }
    })
    console.log(newArr)
    return newArr
}

function flatten(arr){
    const res = [];
    const stack = [].concat(arr);
    console.log('stack',stack);
    console.log(stack === arr);
    while(stack.length !== 0){
        const val = stack.pop();
        if(Array.isArray(val)){
            stack.push(...val);
        }else{
            res.unshift(val);
        }
    }
    return res;
}

function flatten(arr){
    const res = [];
    const stack = [].concat(arr);
    while(stack.length !== 0){
        let val = stack.pop();
        if(val instanceof Array){
            stack.push(...val)
        }else{
            res.unshift(val)
        }
    }
    return res
}

console.log(flatten(arr))



// 递归实现
function flattenDeep(arr) {

}
