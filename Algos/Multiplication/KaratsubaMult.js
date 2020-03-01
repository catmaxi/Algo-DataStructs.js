module.exports = {
  Kmult: function(A, B) {
    return KMult(A, B)
  },
}
function Kmult(a, b) {
  if (b > a) return Kmult(b, a)
  let sqrtA = Math.sqrt(a)
  let p = Math.floor(Math.log2(sqrtA))
  let m = 2 ** p
  let aLow = a % m
  let aHigh = Math.floor(a / m)

  let bLow = b % m
  let bHigh = Math.floor(b / m)

  let r
  let s
  let t

  if (aHigh < 200) {
    r = aHigh * bHigh
    s = (aLow + aHigh) * (bLow + bHigh)
    t = aLow * bLow
  } else {
    r = Kmult(aHigh, bHigh)
    s = Kmult(aLow + aHigh, bLow + bHigh)
    t = Kmult(aLow, bLow)
  }

  let ab = r * m ** 2 + (s - r - t) * m + t
}

let mult = Kmult(2000, 3000)
console.log(mult)
