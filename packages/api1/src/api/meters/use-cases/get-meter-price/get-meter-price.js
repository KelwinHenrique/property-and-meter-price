import { metersRepository } from '../../repository'
import { serializeError } from '../../../../core/services/serializers'
import { ConsoleLogger } from '../../../../core/services/log'

const getMeterPriceInDataBase = async () => {
  try {
    return metersRepository.getMeterValue()
  } catch (error) {
    ConsoleLogger().error('ERROR_GET_PRICE_IN_DATA_BASE', { error })
    return Promise.reject({ messageError: 'Error to find meter price in data base.' })
  }
}

const getMeterPrice = async () => {
  try {
    ConsoleLogger().info('START_GET_METER_PRICE')
    const meterValue = await getMeterPriceInDataBase()
    return { meterValue }
  } catch (error) {
    ConsoleLogger().error('ERROR_GET_PRICE', { error })
    return Promise.reject(serializeError(error, 'Error to find meter price.'))
  }
}

export { getMeterPrice }
