//从第二个数开始往前比
//比他大就往后排
//以此类推进行到最后一个数

//升序
Array.prototype.insertSort = function () {
    for (let i = 0; i < this.length; i++) {
        const temp = this[i];
        let j = i;
        while (j > 0) {
            if (this[j - 1] > temp) {
                this[j] = this[j - 1];
            } else {
                break;
            }
            j--;
        }
        this[j] = temp;
    }
};
let arr = [5, 4, 3, 2, 1];
let arr1=[3,2,5,6,2,7];
arr.insertSort();
arr1.insertSort();
console.log(arr)
console.log(arr1)
console.log('--------------------------------')

// 完全平方数
// function isSquare(n) {
//     return Math.sqrt(n) % 1 === 0;
// }
//
// for (let i = 9999999; i < 100000000; i++) {
//     if (isSquare(i)) {
//         console.log(i)
//     }
// }
