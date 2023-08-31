/**
 * 生成随机字符串
 * @param length
 * @returns {string}
 */

// 写一个方法，参数为任意数字，要求返回一个随机字符串，字符串只包括字母和数字
function generateRandomString(length) {
    const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    let randomString = '';

    for (let i = 0; i < length; i++) {
        const randomIndex = Math.floor(Math.random() * characters.length);
        randomString += characters.charAt(randomIndex);
    }

    return randomString;
}

let res = generateRandomString(5);
console.log(res)
