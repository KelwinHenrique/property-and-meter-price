import { services } from './services'
import { getPropertyPrice } from './get-property-price'

const objectExpectedInReturn = () => (
  {
    propertyPrice: 89.9 * 10
  }
)

describe('Unit Test get-property-price', () => {

  beforeEach(async () => {
    services.getMeterPrice = jest.fn(() => (
      {
        data: {
          meterValue: 89.9
        }
      }
    ))
  })

  test('unit test get-property-price should return expected object contract', async () => {
    const responseGetPropertyPrice = await getPropertyPrice({ quantity: 10 })

    expect(responseGetPropertyPrice).toEqual(objectExpectedInReturn())
  })

  test('unit test get-property-price should return error when anything wrong happens with getMeterValue', async () => {

    const expectAssertValue = 1
    services.getMeterPrice = jest.fn(() => {
      throw new TypeError()
    })

    expect.assertions(expectAssertValue)

    return getPropertyPrice({ quantity: 10 }).catch(err =>
      expect(err.error.message).toEqual('Error to find meter price.')
    )
  })

  test('unit test get-property-price should return a number', async () => {
    const responseGetPropertyPrice = await getPropertyPrice({ quantity: 10 })

    expect(typeof responseGetPropertyPrice.propertyPrice).toBe('number')
  })

  test('unit test get-property-price expect call getMeterPrice once time', async () => {
    await getPropertyPrice({ quantity: 10 })

    expect(services.getMeterPrice.mock.calls.length).toBe(1);

  })

})
