let obj = Object.create({
    a:1,
    b:2
},{
    c:[1,2],
    d:{
        qq:'xx'
    }
})
console.log(obj)
console.log(obj.__proto__)
