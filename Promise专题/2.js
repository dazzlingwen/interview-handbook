/**
 * 补全flow函数，实现功能，按照以下顺序打印
 * -> 1
 * -> 2
 * [延迟1秒]
 * -> 3
 * [延迟1秒]
 * -> 4
 * -> 5
 * -> 6
 * -> done
 */
function flow(effects = []) {
    // 补全代码
    function run(callback) {

    }
}

const stop = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

const subFlow = flow([
    () => stop(1000).then(() => console.log('3'))
]);

flow([
    () => console.log('1'),
    () => console.log('2'),
    subFlow,
    () => console.log('6'),
    [() => stop(1000).then(() => console.log('4')), () => console.log('5')],
]).run(() => {
    console.log('done');
});
