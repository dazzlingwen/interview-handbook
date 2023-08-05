const {api, handle} = require('./api')
const sum = require('./sum')

const data = api()
const a = handle(data, 'a')
const b = handle(data, 'b')
const c = sum(a, b)
console.log(c)
