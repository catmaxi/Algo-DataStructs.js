// import * as printMatrix from './printMatrix.js'
let tools = require('./printMatrix.js')

module.exports = {
  strassMult: function(A, B) {
    return strassMult(A, B)
  },
}

function strassMult(A, B) {
  let M1 = (A[0][0] + A[1][1]) * (B[0][0] + B[1][1])
  let M2 = (A[1][0] + A[1][1]) * B[0][0]
  let M3 = A[0][0] * (B[0][1] - B[1][1])
  let M4 = A[1][1] * (B[1][0] - B[0][0])
  let M5 = (A[0][0] + A[0][1]) * B[1][1]
  let M6 = (A[1][0] - A[0][0]) * (B[0][0] + B[0][1])
  let M7 = (A[0][1] - A[1][1]) * (B[1][0] + B[1][1])

  let C = [[], []]
  C[0][0] = M1 + M4 - M5 + M7
  C[0][1] = M3 + M5
  C[1][0] = M2 + M4
  C[1][1] = M1 - M2 + M3 + M6
  return C
}

// let A = [
//   [1, 2],
//   [3, 4],
// ]
// tools.print2d(A, 2, 2)

// let B = [
//   [1, 1],
//   [1, 1],
// ]
// tools.print2d(B, 2, 2)

// let C = strassMult(A, B)

// tools.print2d(C, 2, 2)
