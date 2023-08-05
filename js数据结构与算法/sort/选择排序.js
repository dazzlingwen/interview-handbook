//找到数组中的最小值，选中它并将其放置在第一位
//接着找到第二小的值，选中它并将其放置在第二位
//以此类推，执行n-1轮

Array.prototype.selectionSort = function () {
    for (let i = 0; i < this.length - 1; i++) {
        //先假设第一位数是最小的
        let indexMin = i;
        for (let j = i; j < this.length; j++) {
            if (this[j] < this[indexMin]) {
                indexMin = j;
            }
        }
        if (indexMin !== i) {
            const temp = this[i];
            this[i] = this[indexMin];
            this[indexMin] = temp;
        }
    }
}

let arr = [5, 4, 3, 2, 1]
arr.selectionSort()
console.log(arr)
