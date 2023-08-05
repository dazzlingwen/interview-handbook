/**
 * 闭包: 计数器
 */

const _count = () => {
    // 补全代码
    var num = 1;
    return function (){
        console.log(num)
        return num++;
    }
}

function z() {
    let timer = _count();
    timer();
    timer();
    timer = null; //释放num
    timer = _count();
    timer();
    return timer() === 4
}

z();
