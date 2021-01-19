import { serializeError } from '../../../../core/services/serializers'

const getPropertyPrice = async (query) => {
  try {
    return { success: 'ok', query }
  } catch (error) {
    return Promise.reject(serializeError(error, 'Error to find property price.'))
  }
}

export { getPropertyPrice }
