function changeObjProperty(o) {
    o.siteUrl = "http://www.baidu.com"
    console.log('first',o);
    o = new Object()
    o.siteUrl = "http://www.google.com"
    console.log('second',o);
}
let webSite = new Object();
changeObjProperty(webSite);
console.log(webSite.siteUrl);
//关键要明白，o的本质只是个指针，变量是一个指针，指向的是两个不同的内存地址，不会出现覆盖的情况
