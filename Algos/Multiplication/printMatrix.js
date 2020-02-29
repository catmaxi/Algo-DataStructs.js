// M is the matrix
// n is the number of rows
// m is the number of columns

module.exports = {
  print2d: function(M, n, m) {
    printM2d(M, n, m)
  },
}
function printM2d(M, n, m) {
  string = ''
  for (let i = 0; i < n; i++) {
    for (let j = 0; j < m; j++) {
      string += M[i][j]
      if (!(j == m - 1)) {
        string += ' | '
      }
    }
    if (!(i == n - 1)) {
      string += '\n'
      let count = 0
      for (let k = 0; k < 2 * m + 1; k++) {
        string += '-'
        count++
      }

      string += '\n'
    }
  }
  console.log(string)
}

// let A = [[], []]

// for (let i = 0; i < 2; i++){
//   for (let j = 0; j < 2; j++){
//     A[i][j]
//   }
// }

// let A = [
//   [1, 2],
//   [3, 4],
// ]
// printM2d(A, 2, 2)
