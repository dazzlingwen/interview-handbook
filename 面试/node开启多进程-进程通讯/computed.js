/**
 * @description 子进程进行计算
 * @author dazzlingWEN
 */

function getSum() {
    let sum = 0
    for (let i = 0; i < 1000; i++) {
        sum += 1
    }
    return sum
}

process.on('message', data => {
    console.info('子进程 id', process.pid)
    console.info('子进程接收到的信息', data)

    const sum = getSum()

    //发送消息给主进程
    process.send(sum)
})
