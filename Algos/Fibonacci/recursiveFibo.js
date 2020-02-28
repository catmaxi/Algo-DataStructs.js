function recursiveFibo(n) {
  if (n == 1) {
    return 1
  } else if (n == 0) {
    return 0
  } else {
    return recursiveFibo(n - 1) + recursiveFibo(n - 2)
  }
}

console.log(recursiveFibo(1000))
