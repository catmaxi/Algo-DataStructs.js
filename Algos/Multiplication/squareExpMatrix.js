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
    return (
      X * squExpMatrix(indexFun.StrassenMatrix.strassMult(X, X), (n - 1) / 2)
    )
  }
}

let X = [
  [2, 0],
  [0, 2],
]
squExpMatrix(X, 4)
