let target = {}
let handler = {
    set: function (target, prop, value) {
        // 之前我们这样赋值
        // target[prop] = value

        // 使用reflect可以这样
        Reflect.set(target, prop, value)
    }
}

let proxy = new Proxy(target, handler)
proxy.name = "猫13"
console.log(proxy.name)   // 猫13
