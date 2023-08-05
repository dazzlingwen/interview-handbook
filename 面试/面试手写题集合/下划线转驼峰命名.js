let re = /_(\w)/g;
function underline2Hump(s) {
    //匹配_后面的单词，把他转化成大写的字母，g代表执行全局匹配
    return s.replace(/_(\w)/g, function (all, letter) {
        console.log(all);
        console.log(letter);
        return letter.toUpperCase();
    })
}

let res = underline2Hump('hello_world');
console.log(res);
