// 实现一个最小堆类
class MinHeap {
    constructor() {
        this.heap = [];
    }

    //交换
    swap(i1, i2) {
        let temp = this.heap[i1];
        this.heap[i1] = this.heap[i2];
        this.heap[i2] = temp;
    }

    //获取父节点
    getParentIndex(i) {
        return Math.floor((i - 1) / 2);
    }

    //获取左节点
    getLeftIndex(i) {
        return i * 2 + 1;
    }
    // 获取右节点
    getRightIndex(i) {
        return i * 2 + 2;
    }

    //上移
    shiftUp(index) {
        // 如果到了堆顶就不上移了
        if (index == 0) {
            return;
        }
        const parentIndex = this.getParentIndex(index);
        if (this.heap[parentIndex] > this.heap[index]) {
            this.swap(parentIndex, index);
            this.shiftUp(parentIndex);
        }
    }

    //下移
    shiftDown(index) {
        const leftIndex = this.getLeftIndex(index);
        const rightIndex = this.getRightIndex(index);
        if(this.heap[leftIndex]<this.heap[index]){
            this.swap(leftIndex,index);
            this.shiftDown(leftIndex);
        }
        if(this.heap[rightIndex]<this.heap[index]){
            this.swap(rightIndex,index);
            this.shiftDown(rightIndex);
        }
    }

    //实现插入方法
    insert(value) {
        this.heap.push(value);
        this.shiftUp(this.heap.length - 1);//上移操作
    }

    //删除堆顶
    popTop() {
        this.heap[0] = this.heap.pop();
        this.shiftDown(0); //保证所有子节点都大于等于堆顶元素
    }

    //堆顶元素
    heapPeek(){
        return this.heap[0];
    }

    //堆的大小
    heapSize(){
        return this.heap.length;
    }
}

const h = new MinHeap();
h.insert(3)
console.log(h.heap);

h.insert(2)
console.log(h.heap);

h.insert(1)
console.log(h.heap);

h.popTop();
console.log(h.heap)

console.log('堆顶元素',h.heapPeek());
console.log('堆的大小',h.heapSize());
