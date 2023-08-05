/**
 * @param urls
 * @param maxConcurrent
 * @returns {Promise<Awaited<unknown>[]>}
 */

// Promise控制并发请求
async function concurrentRequests(urls, maxConcurrent) {
    // 存储每个请求的Promise对象
    const promises = [];

    // 存储正在进行中的请求数量
    let running = 0;

    // 遍历需要请求的URL
    for (let i = 0; i < urls.length; i++) {
        const url = urls[i];

        // 创建一个Promise对象，用于包装每个请求
        const promise = new Promise((resolve, reject) => {

            // 创建XMLHttpRequest对象
            const xhr = new XMLHttpRequest();

            // 设置请求完成的回调函数
            xhr.onload = function () {
                // 请求成功
                if (xhr.status >= 200 && xhr.status < 300) {
                    resolve(xhr.responseText);
                } else {
                    reject(new Error(`Request failed with status ${xhr.status}`));
                }

                // 当前请求完成后，running减1
                running--;

                // 继续处理下一个请求
                processNextRequest();
            };

            // 设置请求失败的回调函数
            xhr.onerror = function () {
                reject(new Error('Request failed'));

                // 当前请求完成后，running减1
                running--;

                // 继续处理下一个请求
                processNextRequest();
            };

            // 发起请求
            xhr.open('GET', url);
            xhr.send();
        });

        // 将当前请求的Promise对象添加到promises数组中
        promises.push(promise);

        // 当前请求数超过最大并发数时，等待其中一个请求完成后再继续发送请求
        if (running >= maxConcurrent) {
            await Promise.race(promises); // 等待最快的那个Promise执行完，就能够空出一个位置
        }

        // 当前请求数未超过最大并发数时，继续发送请求
        processNextRequest();
    }

    // 处理下一个请求
    function processNextRequest() {
        // 如果还有未处理的请求且当前请求数未超过最大并发数，则发送下一个请求
        if (promises.length > 0 && running < maxConcurrent) {
            const nextPromise = promises.shift();
            running++;

            // 等待下一个请求完成
            nextPromise.then(() => {
                processNextRequest();
            });
        }
    }

    // 返回一个Promise对象，当所有请求完成时resolve
    return Promise.all(promises);
}

// 使用示例
const urls = [
    'https://api.example.com/data/1',
    'https://api.example.com/data/2',
    'https://api.example.com/data/3',
    'https://api.example.com/data/4',
    'https://api.example.com/data/5'
];

concurrentRequests(urls, 2)
    .then(responses => {
        // 所有请求完成后的回调函数
        console.log('All requests completed', responses);
    })
    .catch(error => {
        // 请求出错的回调函数
        console.error('Error:', error);
    });
