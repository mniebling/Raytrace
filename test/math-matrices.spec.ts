import { determinant, transpose } from '@/engine/math-matrices'
import { Matrix } from '@/engine/matrix'


describe('.determinant()', () => {

  it('should find the determinant of a 2×2 matrix', () => {

    const m = new Matrix([
       1, 5,
      -3, 2
    ])

    expect(determinant(m)).toFloatingEqual(17)
  })

  it('should freak out about matrices larger than 2×2', () => {

    const identity = new Matrix()

    expect(() => determinant(identity)).toThrow()
  })
})

describe('.transpose()', () => {

  it('should transpose matrices', () => {

    const m1 = new Matrix([
      0, 9, 3, 0,
      9, 8, 0, 8,
      1, 8, 5, 3,
      0, 0, 5, 8
    ])

    const m2 = new Matrix([
      0, 9, 1, 0,
      9, 8, 8, 0,
      3, 0, 5, 5,
      0, 8, 3, 8
    ])

    expect(transpose(m1)).toBeDeepCloseTo(m2)
  })

  it('should transpose the identity matrix', () => {

    const identity = new Matrix()

    expect(transpose(identity)).toBeDeepCloseTo(identity)
  })
})