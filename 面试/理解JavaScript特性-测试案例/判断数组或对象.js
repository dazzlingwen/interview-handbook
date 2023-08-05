let obj={}
let arr=[]
function instanceOf(A,B){
    let p = A;
    p.__proto__ = undefined;
    while(p){
        if(p === B.prototype){
            return true
        }
        p = p.__proto__
    }
    return false
}

console.log(instanceOf([],Function))
console.log(instanceOf([],Array))


let res = Object.prototype.toString.call(obj)

console.log(res)
