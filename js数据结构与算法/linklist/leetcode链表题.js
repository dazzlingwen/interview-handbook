//链表是有序的，所以重复的元素一定相邻
const arr = [1, 1, 2, 3, 3, 4]

var deleteDuplicates = function (head) {
    if (!head) return head;
    //新建一个空指针
    let p = head;
    while (p && p.next) {
        if (p.val === p.next.val) {
            // 进行删除操作
            p.next = p.next.next;
        } else {
            //把指针挪向下一位
            p = p.next
        }
    }
    return head
};

// 环形链表
//怎么记录遍历过的节点
//indexof匹配到则返回 false 说明存在环路
// 核心思路——双指针
var hasCycle = function (head) {
    let p1 = head;
    let p2 = head;
    while (p1 && p2 && p2.next) {
        p1 = p1.next; // 快指针
        p2 = p2.next.next; // 慢指针
        //判断是否指向同一个元素
        if (p1 === p2) {
            return true;
        }
    }
    return false;
};

// 反转链表
var reverseList = function(head) {
    let p1 = head;
    let p2 = null;
    while(p1){
        // 存储原来p1.next的地址以便于p1能继续往下走
        const tmp = p1.next;
        //交换
        p1.next = p2;
        //先完成遍历操作
        p2 = p1;
        p1 = tmp;
    }
    return p2;
};


// 先完成两个节点的链表反转
let a = {val: 1};
let b = {val: 2};
let c = {val: 3}
a.next = b;
b.next = c;
console.log('a', a);

let p1 = a;
let p2 = null;
while (p1){
    const temp = p1.next;
    p1.next = p2;
    p2 = p1;
    p1 = temp;
}
console.log(p1,p2)