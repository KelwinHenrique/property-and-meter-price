import { getPropertyPrice } from './use-cases'
import { success } from '../../core/services/response'

const processGetPropertyPrice = ({ querymen: { query } }, res, next) => (
  getPropertyPrice(query)
    .then(success(res))
    .catch(error => next(error))
)

const propertiesController = {
  processGetPropertyPrice
}

export { propertiesController }
