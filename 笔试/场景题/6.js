function groupArrayByKey(arr = [], key) {
    return arr.reduce((t, v) => (!t[v[key]] && (t[v[key]] = []), t[v[key]].push(v), t), {})
}

const arr = [
    { classId: "1", name: "张三", age: 16 },
    { classId: "1", name: "李四", age: 15 },
    { classId: "2", name: "王五", age: 16 },
    { classId: "3", name: "赵六", age: 15 },
    { classId: "2", name: "孔七", age: 16 }
];

let res = groupArrayByKey(arr, "classId");
console.log(res)


