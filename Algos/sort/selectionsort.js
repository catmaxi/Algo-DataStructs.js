module.exports = {
  selectionsort: function(arr) {
    return selectionsort(arr)
  },
}
;('use strict')
function selectionsort(arr) {
  let n = arr.length
  let sorted = []
  console.log(sorted.length)
}

function findMin(arr) {
  let n = arr.length
  let min = arr[0]
  for (let i = 1; i < n; i++) {
    if (arr[i] < min) min = arr[i]
  }
  return min
}

selectionsort()