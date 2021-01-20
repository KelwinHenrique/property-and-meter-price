import { metersRepository } from '../../repository'
import { getMeterPrice } from './get-meter-price'

const objectExpectedInReturn = () => (
  {
    meterValue: 89.9
  }
)

describe('Unit Test get-meter-price', () => {

  beforeEach(async () => {
    metersRepository.getMeterValue = jest.fn(() => (
      89.9
    ))
  })

  test('unit test get-meter-price should return expected object contract', async () => {
    const responseGetMeterPrice = await getMeterPrice()

    expect(responseGetMeterPrice).toEqual(objectExpectedInReturn())
  })

  test('unit test get-meter-price should return error when anything wrong happens with getMeterValue', async () => {

    const expectAssertValue = 1
    metersRepository.getMeterValue = jest.fn(() => {
      throw new TypeError()
    })

    expect.assertions(expectAssertValue)

    return getMeterPrice().catch(err =>
      expect(err.error.message).toEqual('Error to find meter price in data base.')
    )
  })

  test('unit test get-meter-price should return a number', async () => {
    const responseGetMeterPrice = await getMeterPrice()

    expect(typeof responseGetMeterPrice.meterValue).toBe('number')
  })

  test('unit test get-meter-price expect call getMeterValue once time', async () => {
    await getMeterPrice()

    expect(metersRepository.getMeterValue.mock.calls.length).toBe(1);

  })

})
