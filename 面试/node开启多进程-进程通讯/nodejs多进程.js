// console.info(process.pid);

const http = require('http')


const server = http.createServer((req, res) => {
    if (req.url === '/get-sum') {
        console.info('主进程 id', process.id)
        res.end('hello')
    }
})


server.listen(3000, () => {
    console.info('localhost:3000')
})

console.info(process.pid) //挂起

//开启另外一个进程
// WebWorker
