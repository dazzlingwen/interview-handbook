//javascript中没有链表，可以用object来模拟链表的数据结构
const a = {val: 1}
const b = {val: 2}
const c = {val: 3}
const d = {val: 4}

a.next = b
b.next = c
c.next = d

console.log(a)

//插入链表
const e = {val: 5}
b.next = e
e.next = c
console.log(b)
console.log(a)

