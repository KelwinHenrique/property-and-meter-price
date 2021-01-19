import { Router } from 'express'
import { metersController } from './controller'

const metersRouter = new Router({ mergeParams: true })

metersRouter.get('/price',
  metersController.processGetMeterPrice
  // #swagger.tags = ['Meters']
  // #swagger.description = 'Return meter price.'
  /* #swagger.responses[200] = {
    schema: { meterValue: 84.73573338978721 },
    description: 'Meter price found.'
  } */
  /* #swagger.responses[400] = {
    schema: { message: 'Error to find meter price.' },
    description: 'Error to get meter price.'
  } */
)

export { metersRouter }
