function getSubMatrices(matrix, subRows, subCols) {
    const result = [];
    const rows = matrix.length;
    const cols = matrix[0].length;

    for (let startRow = 0; startRow <= rows - subRows; startRow++) {
        for (let startCol = 0; startCol <= cols - subCols; startCol++) {
            const subMatrix = [];
            for (let i = startRow; i < startRow + subRows; i++) {
                subMatrix.push(matrix[i].slice(startCol, startCol + subCols));
            }
            result.push(subMatrix);
        }
    }

    return result;
}

// 测试
const matrix = [
    ['D', 'A', 'B', 'C'],
    ['A', 'B', 'A', 'B'],
    ['B', 'A', 'B', 'A'],
    ['B', 'B', 'A', 'B']
];

const subMatrices = getSubMatrices(matrix, 3, 3);
console.log(subMatrices);
