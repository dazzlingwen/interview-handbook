let todolistData = [
    {
        id: 1,
        text: '待办事项1',
        done: false
    },
    {
        id: 2,
        text: '待办事项2',
        done: false
    },
    {
        id: 3,
        text: '待办事项3',
        done: false
    }
]

module.exports = todolistData

/**
*优化后的todolistData：
type Todo = {
    id: number;
    text: string;
    done: boolean;
}
// 如果某个变量是todo类型，可以这样
const todoItem: Todo = {
    id: 1,
    text: '待办事项1',
    done: false
}
 */
