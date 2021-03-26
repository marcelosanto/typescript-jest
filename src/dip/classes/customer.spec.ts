import { IndividualCustomer, EnterpriseCustomer } from './customer'

const createIndividualCustomer = (
  firstName: string,
  lastName: string,
  cpf: string,
): IndividualCustomer => {
  return new IndividualCustomer(firstName, lastName, cpf)
}

const createEnterpriseCustomer = (
  name: string,
  cnpj: string,
): EnterpriseCustomer => {
  return new EnterpriseCustomer(name, cnpj)
}

afterEach(() => jest.clearAllMocks())

describe('IndividualCustomer', () => {
  it('should have firstName, lastName, cpf', () => {
    const sut = createIndividualCustomer('Marcelo', 'Santos', '125.168.989-25')
    expect(sut).toHaveProperty('firstName', 'Marcelo')
    expect(sut).toHaveProperty('lastName', 'Santos')
    expect(sut).toHaveProperty('cpf', '125.168.989-25')
  })

  it('should have firstName, lastName, cpf', () => {
    const sut = createIndividualCustomer('Marcelo', 'Santos', '125.168.989-25')
    expect(sut.getName()).toBe('Marcelo Santos')
    expect(sut.getIDN()).toBe('125.168.989-25')
  })
})

describe('EnterpriseCustomer', () => {
  it('should have name and cnpj.', () => {
    const sut = createEnterpriseCustomer('Mrs Labs', '125.168.989-25/0001')
    expect(sut).toHaveProperty('name', 'Mrs Labs')
    expect(sut).toHaveProperty('cnpj', '125.168.989-25/0001')
  })

  it('should have methods to get name and idn for enterprise customers', () => {
    const sut = createEnterpriseCustomer('Mrs Labs', '125.168.989-25/0001')
    expect(sut.getName()).toBe('Mrs Labs')
    expect(sut.getIDN()).toBe('125.168.989-25/0001')
  })
})
