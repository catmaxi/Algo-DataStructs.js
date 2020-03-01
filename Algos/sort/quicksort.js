module.exports = {
  quicksort: function(arr) {
    quicksort(arr)
  },
}
;('use strict')

function quicksort(arr) {
  let high = arr.length - 1
  quicksort_main(arr, 0, high)
}

function quicksort_main(arr, low, high) {
  if (low < high) {
    let pi = partition_r(arr, low, high)

    quicksort_main(arr, low, pi - 1)
    quicksort_main(arr, pi + 1, high)
  }
}

function partition(arr, low, high) {
  let pi = randInt(low, high)
  // let pivot = arr[pi]
  let pivot = arr[high]
  let i = low - 1

  for (let j = low; j <= high; j++) {
    if (arr[j] < pivot) {
      i++
      let tmp = arr[i]
      arr[i] = arr[j]
      arr[j] = tmp
    }
  }
  let tmp = arr[i + 1]
  arr[i + 1] = arr[high]
  arr[high] = tmp

  return i + 1
}

function partition_r(arr, low, high) {
  let random = randInt(low, high)
  let tmp = arr[random]
  arr[random] = arr[high]
  arr[high] = tmp

  return partition(arr, low, high)
}

// Chooses a random integer between a and b
function randInt(a, b) {
  let span = b - a
  return a + Math.floor(Math.random() * span)
}

// let a = 10
// let b = 20
// b = [a, (a = b)][0]
// console.log('x is ' + a + ' y is ' + b)

arr = [3, 1, 2, 2]
quicksort(arr)
console.log(arr)
arr2 = [3, 2, 1, 9, 8, 0, 4, 6, 3, 1, 2, 7]
quicksort(arr2)
console.log(arr2)
