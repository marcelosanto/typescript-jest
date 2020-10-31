import {
  Discount,
  FiftyPercentDiscount,
  TenPercentDiscount,
  NoDiscount,
} from './discount'

const createSut = (className: new () => Discount): Discount => {
  return new className()
}

describe('Discount', () => {
  afterEach(() => jest.clearAllMocks())

  it('should have no discount', () => {
    const sut = createSut(NoDiscount)
    expect(sut.calculate(11.59)).toBe(11.59)
  })

  it('should apply 50% discount on price', () => {
    const sut = createSut(FiftyPercentDiscount)
    expect(sut.calculate(150.5)).toBe(75.25)
  })

  it('should apply 10% discount on price', () => {
    const sut = createSut(TenPercentDiscount)
    expect(sut.calculate(100)).toBe(90)
  })
})
