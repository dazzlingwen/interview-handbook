const params = [
    {
    id: '1',
    name: '小谭',
    children: [{
        id: '2',
        name: '小明',
        children: [{
            id: '3',
            name: '小天',
            children: [],
        }]
    }]
},
    {
    id: '4',
    name: '小青',
    children: [],
},
    {
    id: '5',
    name: '小白',
    children: [],
}];

let searchDeep = (arr,id)=>{
    arr.map(item=>{
        //直接1.toString是会报错的，因为会变成(1.)toString，如果不加Number(id)去处理的话，这里传过来的id相当于直接就是数字4
        if(Number(id).toString() === item.id){
            console.log(item.name)
            return item.name
        }else if(item.children && item.children.length > 0){
            searchDeep(item.children,id)
        }
        return '该用户不存在'
    })
}

let res = searchDeep(params,3)
