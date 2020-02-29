let indexFun = require('../../index.js')

module.exports = {
  squExpMatrix: function(A, B) {
    squExpMatrix(A, B)
  },
}

function squExpMatrix(X, n) {
  if (n < 0) {
    // return squExpMatrix(1 / x, -n)
  } else if (n == 0) {
    return [
      [1, 0],
      [0, 1],
    ]
  } else if (n == 1) {
    return X
  } else if (n % 2 == 0) {
    return squExpMatrix(indexFun.StrassenMatrix.strassMult(X, X), n / 2)
  } else if (n % 2 == 1) {
    let TMP = squExpMatrix(
      indexFun.StrassenMatrix.strassMult(X, X),
      (n - 1) / 2,
    )
    return indexFun.StrassenMatrix.strassMult(X, TMP)
  }
}

let X = [
  [2, 0],
  [0, 2],
]
let Y = squExpMatrix(X, 4)
indexFun.printM.print2d(Y)
// console.log(Y)
