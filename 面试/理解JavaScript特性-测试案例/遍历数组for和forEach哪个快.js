const arr = []
for (let i = 0; i < 100 * 10000; i++) {
    arr.push(i)
}
const length = arr.length

console.time('for')
let n1 = 0
for (let i = 0; i < length; i++) {
    n1++
}
console.timeEnd('for')

console.time('forEach')
let n2 = 0
arr.forEach(() => n2++)
console.timeEnd('forEach')
