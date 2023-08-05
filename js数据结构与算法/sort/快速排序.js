Array.prototype.quickSort = function () {
    const rec = (arr) => {
        if (arr.length === 1) {
            return arr;
        }
        const left = [];
        const right = [];
        const mid = arr[0]; //设置基准元素
        for (let i = 1; i < arr.length; i++) {
            if (arr[i] < mid) {
                left.push(arr[i]);
            } else {
                right.push(arr[i]);
            }
        }
        return [...rec(left), mid, ...rec(right)]
    };
    const res = rec(this);//让这个this指向要排序的数组
    //拷贝
    res.forEach((val, key) => {
        this[key] = val
    });
}



Array.prototype.quickSort_test = function (){
    const rec = (arr)=>{
        if(!arr) return;
        if(arr.length === 1)return arr;
        let left = [];
        let right = [];
        let mid = arr[0];
        for (let i=1;i<arr.length;i++){
            if(arr[i]<mid){
                left.push(arr[i]);
            }else if(arr[i]>mid){
                right.push(arr[i])
            }
        }
        return [...rec(left),mid,...rec(right)]
    }
    const res = rec(this)
    res.forEach((val,key)=>{
        this[key] = val;
    })
}




const arr = [2, 4, 5, 3, 1];
arr.quickSort_test();
console.log(arr);
//递归的时间复杂度是O(logN)
//分区操作的时间复杂度是O(n)
//整体时间复杂度：O(logN*n)
