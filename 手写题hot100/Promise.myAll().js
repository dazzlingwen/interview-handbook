/**
 * 题目链接：https://github.com/Sunny-117/js-challenges/issues/1
 * @param proms
 * @returns {Promise<unknown>}
 */
Promise.myAll = function (proms) {
    return new Promise((resolve, reject) => {
        try {
            let res = []; //用于存放结果
            let count = 0; //用于后面计数需要
            let fullfillCallBack = 0; //用于计算成功Promise的个数
            for (let item of proms) {
                let i = count; //保存当前下标
                count++;

                Promise.resolve(item).then(val => {
                    fullfillCallBack++;
                    // res.push(val);
                    res[i] = val; //这点很关键，也是记录顺序的关键因素，不能是push，而是用到前面保存下来的i，就是用来记录和保证Promise执行顺序的
                    if (fullfillCallBack === count) {
                        resolve(res);
                    }
                }, reason)
            }

            //考虑传入的proms为空的情况
            if (proms.length === 0) {
                resolve(res);
            }

        } catch (error) {
            reject(error);
        }
    })
}


Promise.myAll([
    Promise.resolve(5),
    Promise.resolve(3),
    Promise.resolve(2),
    4,
]).then(
    (data) => {
        // data:[1,2,3,4]
        // 传递[pro1,pro2,pro3,4]的话:内部默认处理Promise.resolve(4)
        console.log("成功", data);
    },
    (reason) => {
        // reason:reason2
        console.log("失败", reason);
    }
);
