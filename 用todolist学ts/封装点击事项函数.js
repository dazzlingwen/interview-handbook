const todolistData = require('./todolistData')

function handleTodoItem(todos) {
    // 点击的时候todo中的done的布尔值取反
    return {
        ...todos,
        done: !todos.done
    }
}

handleTodoItem(todolistData[0])

let obj = {
    a: 1,
    b: 2
}
let x = {
    ...obj,
    b: obj.a
}
console.log(x)
