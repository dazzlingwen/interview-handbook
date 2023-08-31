function foo() {
    var a = 2;
    this.bar();
}
function bar() {
    console.log( this.a );
}
foo(); // ReferenceError: a is not defined
