import { Messaging } from './messaging'

const createSut = () => {
  return new Messaging()
}

describe('Messaging', () => {
  afterEach(() => jest.clearAllMocks())

  it('should return undefined', () => {
    // sut = System under test
    const sut = createSut()
    expect(sut.sendMessage('bla blau')).toBeUndefined()
  })

  it('should call console.log once', () => {
    const sut = createSut()
    const consoleSpy = jest.spyOn(console, 'log')
    sut.sendMessage('oiee')
    expect(consoleSpy).toHaveBeenCalledTimes(1)
  })

  it('should call console.log with "Mensagem enviada:" and msg', () => {
    const sut = createSut()
    const consoleSpy = jest.spyOn(console, 'log')
    sut.sendMessage('blablau')
    expect(consoleSpy).toHaveBeenCalledWith('Mensagem enviada:', 'blablau')
  })
})
