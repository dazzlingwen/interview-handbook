//二分搜索的前提：该数组必须是有序的
Array.prototype.binarySearch = function (item) {
    // this.sort()
    let low = 0;//最小下标
    let high = this.length - 1;//最大下标
    while (low <= high) {
        let mid = Math.floor((low + high) / 2);
        let element = this[mid];
        if (element < item) { //说明要找的item在右半分区
            low = mid + 1;
        } else if (element > item) {
            high = mid - 1;//二分缩小查找范围
        } else {
            return mid;
        }
    }
    //如果结束了while循环体都还未找到，就返回-1
    return -1;
}
const res = [1, 2, 3, 4, 5].binarySearch(4)
console.log(res)//找得到就返回数组下标

//时间复杂度：O(logN) //但凡是遇到劈成两半的这种，时间复杂度都是O(logN)+
