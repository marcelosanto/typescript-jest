import { Product } from './product'

const createSut = (name: string, price: number): Product => {
  return new Product(name, price)
}

describe('Product', () => {
  afterEach(() => jest.clearAllMocks())

  it('should return properties name and price', () => {
    const sut = createSut('Sapato', 50.99)

    expect(sut).toHaveProperty('name', 'Sapato')
    expect(sut.price).toBeCloseTo(50.99)
  })
})
