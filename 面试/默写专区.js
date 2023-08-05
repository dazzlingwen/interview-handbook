// promise控制并发请求
async function controlReq(urls, maxConcurrent) {
    // 先处理这些urls，每一个请求都要用promise包装起来
    let promises = [];// 需要有个数组来存储所有这些经过promise包装起来的请求

    // 正在运行的请求数
    let running = 0

    // 那我们就需要先把这些url变成一个个请求，才能进行下一步的“包装”
    for (let i = 0; i < urls.length; i++) {
        let url = urls[i];

        // 在遍历里面就已经开始包装了
        const promise = new Promise((resolve, reject) => {
            let xhr = new XMLHttpRequest();
            xhr.onload = function () {
                if (xhr.status >= 200 && xhr.status < 300) {
                    resolve('success');
                } else {
                    reject('fail');
                }
                running--;
                // next
                processNextRequest();
            }
            xhr.onerror = function () {
                reject(new Error('request fail'));
                running--;
                // next
                processNextRequest();
            }
            xhr.open('GET', url);
            xhr.send();
        })

        promises.push(promise);
        if (running > maxConcurrent) {
            await Promise.race(promises);
        }
        // next
        processNextRequest();
    }

    function processNextRequest(){
        if(promises.length>0 && running<maxConcurrent){
            const nextPromise = promises.shift();
            running++;// 请求数要增加

            // 等待下一个请求完成
            nextPromise.then(()=>{
                processNextRequest();
            })
        }
    }

    return Promise.all(promises);
}
