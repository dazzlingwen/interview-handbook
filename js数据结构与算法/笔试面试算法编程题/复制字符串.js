/**
 * input:abcdef
 * num1:2 num2:4
 * 3 6
 * output:
 * abbbccccddddeef
 * */

function changeStr(str,num1,num2){
    let x = str.slice(num1-1,num2+1);
    let newStr = ''
    for(let item in x){
        newStr = newStr + x[item].repeat(2);
    }
    return str.replace(x,newStr);
}

let newStr = changeStr('abcdef',2,4);
console.log(changeStr(newStr,3,6));
