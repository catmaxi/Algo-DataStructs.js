function dynaFibo(n) {
  let arr = new Array(n)

  arr[0] = 0
  // console.log(arr[0])
  arr[1] = 1
  // console.log(arr[0])
  for (let i = 2; i <= n; i++) {
    arr[i] = arr[i - 1] + arr[i - 2]
    // console.log(arr[i])
  }
  return arr[n]
}

console.log(dynaFibo(1000))
