// import * as printMatrix from './printMatrix.js'
function strassMult(A, B) {
  M1 = (A[0][0] + A[1][1]) * (B[0][0] + B[1][1])
  M2 = (A[1][0] + A[1][1]) * B[0][0]
  M3 = A[0][0] * (B[0][1] - B[1][1])
  M4 = A[1][1] * (B[1][0] - B[0][0])
  M5 = (A[0][0] + A[0][1]) * B[1][1]
  M6 = (A[1][0] - A[0][0]) * (B[0][0] + B[0][1])
  M7 = (A[0][1] - A[1][1]) * (B[1][0] + B[1][1])

  let C = [[], []]
  C[0][0] = M1 + M4 - M5 + M7
  C[0][1] = M3 + M5
  C[1][0] = M2 + M4
  C[1][1] = M1 - M2 + M3 + M6
  return C
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

let A = [
  [1, 2],
  [3, 4],
]
printM2d(A, 2, 2)

let B = [
  [1, 1],
  [1, 1],
]
printM2d(B, 2, 2)

let C = strassMult(A, B)

printM2d(C, 2, 2)
