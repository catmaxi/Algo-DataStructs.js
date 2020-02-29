module.exports = {
  squareExp: function(A, B) {
    squareExp(A, B)
  },
}
function squareExp(x, n) {
  if (n < 0) {
    return squareExp(1 / x, -n)
  } else if (n == 0) {
    return 1
  } else if (n == 1) {
    return x
  } else if (n % 2 == 0) {
    return squareExp(x * x, n / 2)
  } else if (n % 2 == 1) {
    return x * squareExp(x * x, (n - 1) / 2)
  }
}

// console.log(squareExp(2, 50))
// console.log(2 ** 50)
// console.log(543 ** 5)
