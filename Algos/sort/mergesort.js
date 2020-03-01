module.exports = {
  mergesort: function(arr) {
    return mergesort(arr)
  },
}
function mergesort(arr) {
  let l = 0
  let r = arr.length - 1
  return mergesort_main(arr, l, r)
}
function mergesort_main(arr, l, r) {
  if (l < r) {
  }
}

function merge(arr, l, m, r) {
  let i, j, k
  let n1 = m - l + 1
  let n2 = r - m
  let L, R

  for (i = 0; i < n1; i++) L[i] = arr[l + i]
  for (j = 0; j < n2; j++) R[j] = arr[m + 1 + j]
}
