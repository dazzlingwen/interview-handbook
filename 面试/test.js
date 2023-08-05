function test1(seconds){
// 请补全此处
    setInterval(()=>{
        console.log('test1' + seconds);
    },seconds);
}
test1(1000);


function test2(callback, seconds, n){
// 请补全此处
    return async function(...arg){
        for(let i=0;i<n;i++){ //for循环是同步的，下面如果不用Promise就同时打印出一堆了，相当于全部放到一个任务队列中去了
            await new Promise(function(res,rej){
                setTimeout(() => {
                    callback.apply(this,arg)
                    res()
                }, seconds);
            })
        }
    }
}

let printFunc = test2((e)=>{
    console.log(e);
},1000,5);
printFunc('hello');


//["id1,", "id2,id3","id4"] => ["id1", "id2", "id3", "id4"]
function test3(data){
// 请补全此处
    let newData = [];
    data.forEach(item=>{
        newData = newData.concat(item.split(','));
    })
    for (let i=0;i<newData.length;i++){
        if(newData[i] === ''){
            newData.splice(i,1);
        }
    }
    return newData;
}
let result = test3(["id1,", "id2,id3","id4"]);
console.log(result);
