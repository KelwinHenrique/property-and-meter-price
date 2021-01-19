import { getMeterPrice } from './use-cases'
import { success } from '../../core/services/response'

const processGetMeterPrice = (req, res, next) => (
  getMeterPrice()
    .then(success(res))
    .catch(error => next(error))
)

const metersController = {
  processGetMeterPrice
}

export { metersController }
