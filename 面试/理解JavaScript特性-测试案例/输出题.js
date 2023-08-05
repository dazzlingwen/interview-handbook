setTimeout(() => {
    console.log('g')
}, 0)
console.log('a')

Promise.resolve().then(() => {
    console.log('b')
}).then(() => {
    console.log('c')
})

new Promise((resolve) => {
    console.log('d')
    resolve()
}).then(() => {
    console.log('e')
}).then(() => {
    console.log('f')
})

/* -------------------------------------*/

const array = new Array(5).map((item) => {
    // console.log('item', item)
    return item = {
        name: '1'
    }
});
console.log('array', array)

let fooIsAnArray = [1, 2, 3], i = 0;
for (; i < 2; i++) {
    fooIsAnArray.splice(i, 1);
}
console.log('fooIsAnArray', fooIsAnArray)

let arr = ['foo', 123, 'baz', 'qux'];
arr.reverse();
console.log(arr);

let arr1=[6,2,4]
function compare(val1,val2){
    if(val1<val2){
        return 1;
    }else if(val1>val2){
        return -1;
    }else{
        return 0;
    }
}
console.log(arr1.sort(compare)); //[ 6, 4, 2 ]
