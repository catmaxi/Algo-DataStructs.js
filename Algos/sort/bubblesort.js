module.exports = {
  bubblesort: function(arr) {
    return bubblesort(arr)
  },
}
;('use strict')

function bubblesort(arr) {
  let n = arr.length
  for (let i = 0; i < n; i++) {
    let swapped = false
    // let cur = arr[i]
    for (let j = 0; j < n; j++) {
      if (arr[j] > arr[j + 1]) {
        let tmp = arr[j]
        arr[j] = arr[j + 1]
        arr[j + 1] = tmp
        swapped = true
      }
    }
    if (!swapped) break
  }
  return arr
}

console.log(bubblesort([3, 2, 1, 9, 8, 0, 4, 6, 3, 1, 2, 7]))
console.log(bubblesort([3, 1, 2, 2]))
