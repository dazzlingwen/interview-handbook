function fn(bar){
    console.log(bar()) //函数>参数，这里打印的是函数2
    var bar=3
    console.log(bar)     //这里前变量出现，直接最高优先级，打印3
    var bar=5
    function bar(){
        return '函数1'
    }
    function bar(){
        return '函数2'
    }
    console.log(bar)   //前变量出现两次，它优先，于是不看函数，两个前变量优先级一样，后者覆盖前者，故打印5
    var bar=function(){
        console.log('函数3')
        return '函数3'
    }
    console.log(bar)   //依旧是前变量出现，最后一个覆盖之前的前变量，打印函数3
}
fn(6)


