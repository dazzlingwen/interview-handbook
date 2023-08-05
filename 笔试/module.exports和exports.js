// 注意琢磨这句话!! exports 或 module.exports 其中一个一旦重新赋值，exports 将失效

// { foo:'bar' }
exports.foo = 'bar'

// { foo:'bar',a:123 }
module.exports.a = 123

// 将exports的引用改变了
exports = {
    a: 456
}

// { foo:'foo',a:123 }
module.exports.foo = 'foo'

// 无效
exports.a = 567

exports = module.exports

// { foo: 'foo', a: 123, c: 789 }
exports.c = 789
