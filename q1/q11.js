function print(a, m) {
    var b = Array(m * m);
    for (i = 0; i <m*m; i++)
        for (j = 0; j < m; j++)
            b[j] = b[i * m + j] = a[j];
    return b;
}

const alpha = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
var m = 26;
let c = print(alpha, m)
console.log(c)
function alphaMatrix(n) {
    var matrixSize = n * n;
    var matrixElements = [];
    var matrixRows = [];

    for (i = 0; i < matrixSize; i++) {
        matrixElements.push(c[i]);
    }
    for (j = 0; j < n; j++) {
        matrixRows.push(matrixElements.splice(0, n));
    } console.log(matrixRows)
    output = matrixRows[0].map((_, colIndex) => matrixRows.map(row => row[colIndex]));
    return (output.reverse())

}
let res = alphaMatrix(3)
console.log(res)