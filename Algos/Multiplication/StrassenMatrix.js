import * as printMatrix from './printMatrix.js'
function strassMult(A, B) {
  M1 = (A[1][1] + A[2][2]) * (B[1][1] + B[2][2])
  M2 = (A[2][1] + A[2][2]) * B[1][1]
  M3 = A[1][1] * (B[1][2] - B[2][2])
  M4 = A[2][2] * (B[2][1] - B[1][1])
  M5 = (A[1][1] + A[1][2]) * B[2][2]
  M6 = (A[2][1] - A[1][1]) * (B[1][1] + B[1][2])
  M7 = (A[1][2] - A[2][2]) * (B[2][1] + B[2][2])

  C[1][1] = M1 + M4 - M5 + M7
  C[1][2] = M3 + M5
  C[2][1] = M2 + M4
  C[2][2] = M1 - M2 + M3 + M6
  return C
}

