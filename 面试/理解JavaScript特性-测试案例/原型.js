Function.prototype.a = () => console.log(1)
Object.prototype.b = () => console.log(2)

function A() {
}

const a = new A()
console.log(A.prototype)
// console.log(a.a)
// a.a()//undefined
// a.b()//undefined
console.log(a)
