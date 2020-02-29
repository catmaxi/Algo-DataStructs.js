const indexFun = require('../../index.js')

function matrixFibo(n) {
  let M = [
    [1, 1],
    [1, 0],
  ]
  if (n == 0) return 0
  else if (n == 1) return 1
  let A = indexFun.squareExpMatrix.squExpMatrix(M, n - 1)
  return A[0][0]
}

console.log(matrixFibo(1000))
