/**
 * 题目要求：
 * 小美定义一个矩阵是好矩阵，当且仅当该矩阵满足：
 * 1.矩阵仅由'A'、'B'、'C'三种字符组成，且三种字符都出现过
 * 2.矩阵相邻的字符都不相等
 * 现给定一个n*m的矩阵，小美想知道有多少个3*3的子矩阵是好矩阵，输出一个数字，代表好矩阵的数量
 * goodMatrix 判断好矩阵
 * @param arr 模拟矩阵
 * @return Number
 */
function goodMatrix(arr) {
    let m = arr[0].length;
    let n = arr.length;
    let res = []; // 所有子矩阵的组合

    for (let starRow = 0; starRow <= n - 3; starRow++) {
        for (let starCol = 0; starCol <= m - 3; starCol++) {
            let subMatrix = [];
            for (let i = starRow; i < starRow + 3; i++) {
                subMatrix.push(arr[i].slice(starCol, starCol + 3));
            }
            res.push(subMatrix);
        }
    }
    console.log(res);
    let count = 0;
    res.forEach(item => {
        // item === 每一个子矩阵
        for (let i = 0; i < item.length; i++) {
            // 横着遍历子矩阵
            for (let j = 0; j < 3; j++) {
                if(item[i][j] === item[i][j]){
                    count = count + 0;
                }
                count++;
            }
        }
        // 竖着遍历子矩阵

    })

}

// 测试案例
let arr1 = [
    ['A', 'B', 'C'],
    ['B', 'A', 'X'],
    ['A', 'B', 'C'],
    ['C', 'B', 'A']
];
let arr2 = [
    ['D', 'A', 'B', 'C'],
    ['A', 'B', 'A', 'B'],
    ['B', 'A', 'B', 'A'],
    ['B', 'B', 'A', 'B']
];
console.log(goodMatrix(arr2));
