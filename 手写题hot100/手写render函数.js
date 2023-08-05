/**
 * 题目连接：https://github.com/Sunny-117/js-challenges/issues/37
 * @param vnode
 * @private
 */
function _render(vnode) {
    // 如果这个vnode是纯文本
    if (typeof vnode === 'string') {
        return document.createTextNode(vnode);// 直接创建节点
    }
    // 如果这个vnode是数字
    if (typeof vnode === 'number') {
        let sNode = String(vnode);// 需要转为字符串，然后重复上述步骤
        return document.createTextNode(sNode);
    }

    //如果这个vnode是个JSON对象（也就是一个虚拟DOM），则需要逐层转为DOM节点
    // 先创建最外层的根节点
    let dom1 = document.createElement(vnode.tag);
    // 判断这个对象是否为空对象，如果不是空对象就进行遍历，往真实DOM上添加属性
    // if (JSON.stringify(obj) !== "{}") {
    // 另一种是直接判断属性集是否存在（具体看题目要求）
    if (vnode.attrs) {
        Object.keys(vnode.attrs).forEach(key => {
            let value = vnode.attrs[key];
            dom1.setAttribute(key, value);
        })
    }
    if(vnode.children){
        vnode.children.forEach(item=>{
            dom1.appendChild(_render(item))
        })
    }
    return dom1;
}
