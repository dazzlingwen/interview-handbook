const obj = {
    dev: 'bfe',
    a: function () {
        return this.dev
    },
    b() {
        return this.dev
    },
    c: () => {
        return this.dev
    }, //undefined
    d: function () {
        return (() => {
            return this.dev
        })()
    },
    e: function () {
        return this.b()
    },
    f: function () {
        return this.b
    },//undefined
    g: function () {
        return this.c()
    },//undefined
    h: function () {
        return this.c
    },//undefined
    i: function () {
        return () => {
            return this.dev
        }
    }
}
console.log(obj.a())

console.log(obj.b())

console.log(obj.c())

console.log(obj.d())

console.log(obj.e())

console.log(obj.f()())

console.log(obj.g())

console.log(obj.h()())

console.log(obj.i()())


for (let i = 0; i < 5; i++) {
    setTimeout(() => console.log(i), 0)
}



var a = 1;
var a = function(){
    console.log(2);
}

console.log(a)
// 输出 [Function a]

