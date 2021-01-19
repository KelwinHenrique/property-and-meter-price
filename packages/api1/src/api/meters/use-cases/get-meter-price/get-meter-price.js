import { metersRepository } from '../../repository'
import { serializeError } from '../../../../core/services/serializers'

const getMeterPriceInDataBase = async () => {
  try {
    return metersRepository.getMeterValue()
  } catch (error) {
    return Promise.reject({ messageError: 'Error to find meter price in data base.' })
  }
}

const getMeterPrice = async () => {
  try {
    const meterValue = await getMeterPriceInDataBase()
    return { meterValue }
  } catch (error) {
    return Promise.reject(serializeError(error, 'Error to find meter price.'))
  }
}

export { getMeterPrice }
