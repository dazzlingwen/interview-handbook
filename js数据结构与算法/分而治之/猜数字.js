const readline = require('readline');
//1~n target系统随机抽取
//pick 用户选择的数字
let num = readline

function guessNumber(n) {
    let pick = Math.round(Math.random() * n);
    console.log(pick)
    let left = 0;
    let right = n;
    let mid = Math.floor((left + right) / 2);
    while (left <= right) {
        if (num > pick) {
            right = num - 1;
        } else if (num < pick) {
            left = num + 1;
        } else {
            return num;
        }
    }
}
guessNumber(10)

// const readline = require('readline');
//
// const rl = readline.createInterface({
//     input: process.stdin,
//     output: process.stdout
// });
//
// rl.question('What do you think of Node.js? ', (answer) => {
//     // TODO: Log the answer in a database
//     console.log(`Thank you for your valuable feedback: ${answer}`);
//
//     rl.close();
// });
