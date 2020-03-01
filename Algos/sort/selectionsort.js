module.exports = {
  selectionsort: function(arr) {
    return selectionsort(arr)
  },
}
;('use strict')
function selectionsort(arr) {
  let n = arr.length
  // let sorted = []
  for (let i = 0; i < n; i++) {
    let min = arr[i]
    let minIndex = i
    for (let j = i + 1; j <= n; j++) {
      if (arr[j] < min) {
        min = arr[j]
        minIndex = j
      }
    }
    let tmp = min
    arr[minIndex] = arr[i]
    arr[i] = tmp
    // arr.splice(minIndex, 1)
    // sorted.push(min)
  }
  return arr
}

// function findMin(arr) {
//   let n = arr.length
//   let min = arr[0]
//   for (let i = 1; i < n; i++) {
//     if (arr[i] < min) min = arr[i]
//   }
//   return min
// }

console.log(selectionsort([3, 2, 1, 9, 8, 0, 4, 6, 3, 1, 2, 7]))
console.log(selectionsort([3, 1, 2, 2]))
