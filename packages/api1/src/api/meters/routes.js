import { Router } from 'express'
import { metersController } from './controller'

const metersRouter = new Router({ mergeParams: true })

metersRouter.get('/price',
  metersController.processGetMeterPrice
)

export { metersRouter }
