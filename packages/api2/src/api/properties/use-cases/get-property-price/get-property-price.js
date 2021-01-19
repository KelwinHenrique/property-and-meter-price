import { serializeError } from '../../../../core/services/serializers'
import { services } from './services'
import { ConsoleLogger } from '../../../../core/services/log'

const getMeterPrice = async () => {
  try {
    return (await services.getMeterPrice()).data.meterValue
  } catch (error) {
    ConsoleLogger().error('ERROR_GET_METER_PRICE', { error })
    return Promise.reject({ messageError: 'Error to find meter price.' })
  }
}

const getPropertyPrice = async (query) => {
  try {
    ConsoleLogger().info('START_GET_PROPERTY_PRICE', { query })
    const meterPrice = await getMeterPrice()
    return { propertyPrice: meterPrice * query.quantity }
  } catch (error) {
    ConsoleLogger().error('ERROR_GET_PROPERTY_PRICE', { error, query })
    return Promise.reject(serializeError(error, 'Error to find property price.'))
  }
}

export { getPropertyPrice }
