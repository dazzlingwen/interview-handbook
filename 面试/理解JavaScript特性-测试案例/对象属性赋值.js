// let a = {}, b = '123', c = 123
// a[b] = 'b'
// console.log(a)
// a[c] = 'c'
// console.log(a)
// console.log(a[b])


let a = {}, b = Symbol('123'), c = Symbol('123')
a[b] = 'b'
console.log(a)
a[c] = 'c'
console.log(a)
console.log(a[b])
