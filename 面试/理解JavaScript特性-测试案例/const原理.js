const obj = {
    a: 1,
    b: 2,
    c: {
        d: 3,
        e: {
            g: 4
        }
    }
}

obj.a = 23;
obj.c.e.g = 5;
console.log(obj.c.e.g);
console.log(obj.a);
