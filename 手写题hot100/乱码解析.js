// "I?▲▲love▲?the▲?▲▲?great▲▲??wall."

function parseStr(str) {
    let strArr = str.split('');
    for (let i = 0; i < strArr.length; i++) {
        let cur = strArr[i];
        let prev = strArr[i - 1];
        if (cur !== '?' && cur !== '▲') { //如果是英文字母
            if (prev == '?') {
                strArr[i] = cur.toUpperCase();
            }
        }
    }
    strArr.forEach((item,index)=>{
        if(item === '?'|| item =='▲'){
            strArr[index] = '';
        }
    })
    return strArr.join('');
}

let res = parseStr("I?▲▲love▲?the▲?▲▲?great▲▲??wall.");
console.log(res);
