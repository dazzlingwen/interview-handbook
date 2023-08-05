const json = {
    a: {
        b: {
            c: 1
        }
    },
    d: {e: 2}
}

const path = ['a', 'b', 'c']; //假设json里面存放的是路径

let p = json;//新建一个指针
path.forEach(k => {
    p = p[k];
})

console.log(p) // 1


function ListNode(val, next) {
    this.val = (val === undefined ? 0 : val)
    this.next = (next === undefined ? null : next)
}


var addTwoNumbers = function(l1, l2) {
    const l3 = new ListNode(0);
    let p1 = l1;
    let p2 = l2;
    let p3 = l3;
    let carry = 0;
    while(p1 || p2){
        let v1 = p1 ? p1.val : 0;
        let v2 = p2 ? p2.val : 0;
        let val =  v1 + v2 + carry;
        carry = Math.floor(val / 10);
        p3.next = new ListNode(val % 10); // 个位
        if(p1){
            p1 = p1.next;
        }
        if(p2){
            p2 = p2.next;
        }
        p3 = p3.next;
    }
    if(carry){
        p3.next = new ListNode(carry);
    }
    return l3.next;
};