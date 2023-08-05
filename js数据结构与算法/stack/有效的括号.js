//有效的括号
var isValid = function (s) {
    const stack = [];
    for (let i of s) {
        if (i === '(' || i === '{' || i === '[') {
            stack.push(i)
        }else{
            if(stack.length === 0) return false
            else {
                const topNum = stack[stack.length -1];
                if(
                    topNum === '('&& i === ')'||
                    topNum === '{'&& i === '}'||
                    topNum === '['&& i === ']'
                ){
                    stack.pop()
                }else return false
            }
        }
    }
    return stack.length === 0;
}

const result = isValid('()')
console.log(result)

let arr =[1,2,3];
console.log(arr.indexOf(2)); // 如果匹配的话，返回的是该val在数组中的index
