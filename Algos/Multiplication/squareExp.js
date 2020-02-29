function squareExp(x, n) {
  if (n < 0) {
    return squareExp(1 / x, -n)
  } else if (n == 0) {
    return 1
  } else if (n == 1) {
    return x
  } else if (n % 2 == 0) {
    // console.log('even ' + x * x + ' and ' + n / 2 + ' n is ' + n)
    return squareExp(x * x, n / 2)
  } else if (n % 2 == 1) {
    // console.log('odd ' + x * x + ' and ' + (n - 1) / 2 + ' n is ' + n)
    return x * squareExp(x * x, (n - 1) / 2)
  }
}

console.log(squareExp(2, 50))
console.log(2 ** 50)
console.log(543 ** 5)
