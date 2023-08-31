function foo(num) {
    console.log('foo' + num);
    this.count++;
    // foo.count++; //利用foo的词法作用域
}

foo.count = 0;

var i;
for (i = 0; i < 10; i++) {
    if (i > 5) {
        // foo(i);
        foo.call(foo, i);
    }
}


console.log(foo.count);
