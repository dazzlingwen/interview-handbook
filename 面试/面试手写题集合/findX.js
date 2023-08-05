/**
 * 找出缺少的X
 * @param  {Array} arr 缺少X的数组，数组无序
 * @return {Number}    返回缺少的数X
 */
function findX (arr) {
    // 完善代码
    let max = Math.max(...arr);
    let min = Math.min(...arr);
    for(let i = min;i<max;i++){
        if(arr.indexOf(i)<0){
            return i
        }
    }
}

// 举例
var arr = [3, 8, 2, 6, 4, 5];
findX(arr); // 返回7
