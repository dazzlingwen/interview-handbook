function Aname(name) {
    if (name) {
        this.name = name;
    }
}

Aname.prototype.name = '小红';
let name1 = new Aname();

function Bname(name) {
    this.name = name;
}

Bname.prototype.name = '小绿';
let name2 = new Bname();

console.log(name1);
console.log(name2);

// ----------------------------

console.log(parseFloat('60.750'));
console.log(parseFloat('60.750name'));
console.log(Number('60.750name'));
console.log(Number(undefined));
console.log(Number(null));
