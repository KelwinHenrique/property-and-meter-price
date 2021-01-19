import { serializeError } from '../../../../core/services/serializers'
import { services } from './services'

const getMeterPrice = async () => {
  try {
    return (await services.getMeterPrice()).data.meterValue
  } catch (error) {
    return Promise.reject({ messageError: 'Error to find meter price.' })
  }
}

const getPropertyPrice = async (query) => {
  try {
    const meterPrice = await getMeterPrice()
    return { propertyPrice: meterPrice * query.quantity }
  } catch (error) {
    return Promise.reject(serializeError(error, 'Error to find property price.'))
  }
}

export { getPropertyPrice }
