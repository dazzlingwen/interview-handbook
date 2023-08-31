const a = '大疆';
const b = a;
const c = [b];
const d = c;
d[0] = 'dajiang';
console.log(a, b, c[0], d[0]);
