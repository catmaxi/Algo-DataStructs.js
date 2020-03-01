module.exports = {
  selectionsort: function(arr) {
    return selectionsort(arr)
  },
}
;('use strict')
function selectionsort(arr) {
  let n = arr.length
  let sorted = []
  for (let i = 0; i < n; i++) {
    let min = arr[0]
    let j
    let minIndex = 0
    for (j = 1; j < n - i; j++) {
      if (arr[j] < min) {
        min = arr[j]
        minIndex = j
      }
    }
    arr.splice(minIndex, 1)
    sorted.push(min)
  }
  return sorted
}

function findMin(arr) {
  let n = arr.length
  let min = arr[0]
  for (let i = 1; i < n; i++) {
    if (arr[i] < min) min = arr[i]
  }
  return min
}

console.log(selectionsort([3, 2, 1, 9, 8, 0, 4, 6, 3, 1, 2, 7]))
