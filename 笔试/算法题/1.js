/**
 * 字符串权值 = 字符串长度 * 字符种类数量
 * 给一个字符串，切分出k个子串，求子串的最大权值尽量最小
 * 如：str = ‘ababbbb’ ;k = 2，那么最终返回6，两个子串为‘aba’、‘bbbb’
 * */

function getMaxWeight(str, k) {
    const chars = new Set(str);
    console.log('chars',chars)
    const types = chars.size;
    const n = str.length;

    // 计算字符串的权值
    const weight = n * types;

    // 计算字符串切分后的最大权值可能的范围
    let left = Math.ceil(weight / k);
    let right = weight;

    // 二分搜索
    while (left < right) {
        const mid = Math.floor((left + right) / 2);
        let count = 1; // 初始为1，即默认至少有1个子串

        let sum = 0; // 当前子串权值
        for (let i = 0; i < n; i++) {
            const c = str[i];
            sum += types - chars.has(c); // 更新当前子串权值
            if (sum > mid) {
                count++; // 更新子串数量
                sum = types - chars.has(c); // 开始统计下一个子串的权值
            }
        }

        if (count > k) {
            left = mid + 1; // 子串数量过多，缩小最大权值范围
        } else {
            right = mid; // 子串数量不够，扩大最大权值范围
        }
    }

    return left; // left即为最终结果
}

let res = getMaxWeight('ababbbb',2);
console.log(res);
