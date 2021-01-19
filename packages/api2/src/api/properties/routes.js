import { Router } from 'express'
import { propertiesController } from './controller'
import { middleware as query } from 'querymen'

const propertiesRouter = new Router({ mergeParams: true })

propertiesRouter.get('/price',
  query({
    quantity: {
      type: Number,
      required: true,
      max: 10000,
      min: 10
    },
  }),
  propertiesController.processGetPropertyPrice
)

export { propertiesRouter }
