function isGoodMatrix(subMatrix) {
    const chars = new Set();
    for (let row = 0; row < 3; row++) {
        for (let col = 0; col < 3; col++) {
            const char = subMatrix[row][col];
            chars.add(char);
            console.log('chars', chars);
            // 判断一下char中的元素，只能包含A、B、C
        }
    }

    if (chars.size !== 3 || [...chars].some(char => !['A', 'B', 'C'].includes(char))) { // nb，还能这么写
        return false;
    }

    for (let row = 0; row < 2; row++) {
        for (let col = 0; col < 2; col++) {
            if (subMatrix[row][col] === subMatrix[row][col + 1]
                || subMatrix[row][col] === subMatrix[row + 1][col]
            ) {
                return false;
            }
        }
    }
    return true;
}

function countGoodMatrices(matrix) {
    const rows = matrix.length;
    const cols = matrix[0].length;
    let count = 0;

    for (let row = 0; row <= rows - 3; row++) {
        for (let col = 0; col <= cols - 3; col++) {
            const subMatrix = [
                matrix[row].slice(col, col + 3),
                matrix[row + 1].slice(col, col + 3),
                matrix[row + 2].slice(col, col + 3)
            ];
            console.log(subMatrix)
            if (isGoodMatrix(subMatrix)) {
                count++;
            }
        }
    }

    return count;
}

// 测试
const matrix = [
    ['D', 'A', 'B', 'C'],
    ['A', 'B', 'A', 'B'],
    ['B', 'A', 'B', 'A'],
    ['B', 'B', 'A', 'B']
];

const goodMatrixCount = countGoodMatrices(matrix);
console.log(goodMatrixCount);
