module.exports = {
  mergesort: function(arr) {
    mergesort(arr)
  },
}
;('use strict')
function mergesort(arr) {
  let l = 0
  let r = arr.length - 1
  return mergesort_main(arr, l, r)
}
function mergesort_main(arr, l, r) {
  if (l < r) {
    let m = Math.floor(l + (r - l) / 2)

    // sort both halves
    mergesort_main(arr, l, m)
    mergesort_main(arr, m + 1, r)

    merge(arr, l, m, r)
  }
}

function merge(arr, l, m, r) {
  let i, j, k
  let n1 = m - l + 1
  let n2 = r - m
  let L = []
  let R = []

  for (i = 0; i < n1; i++) L[i] = arr[l + i]
  for (j = 0; j < n2; j++) R[j] = arr[m + 1 + j]

  i = 0
  j = 0
  k = l

  while (i < n1 && j < n2) {
    if (L[i] <= R[j]) {
      arr[k] = L[i]
      i++
    } else {
      arr[k] = R[j]
      j++
    }
    k++
  }

  while (i < n1) {
    arr[k] = L[i]
    i++
    k++
  }
  while (j < n2) {
    arr[k] = R[j]
    j++
    k++
  }
}
// arr = [3, 1, 2, 2]
// mergesort(arr)
// console.log(arr)
// arr2 = [3, 2, 1, 9, 8, 0, 4, 6, 3, 1, 2, 7]
// mergesort(arr2)
// console.log(arr2)
