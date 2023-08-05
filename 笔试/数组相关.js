var a = [].push(...[1, 2, 3]);
console.log(a);
console.log(...[1, 2, 3]);


var set = new Set([0, 2, 2, 0, 0, 5, 9, {}, {}, NaN, NaN]);
console.log(set.size);

var name = 'tom';
function getMethod() {
    var result = function () {
        return name;
    };
    var name = 'jerry';
    return result;
}
var getName = getMethod();
var name1 = getName();
console.log(name1)

console.log(new RegExp('\\\\\\\\', 'gi'))
console.log('\\\\\\'.replace(new RegExp('\\\\\\\\', 'gi'), '/'))


