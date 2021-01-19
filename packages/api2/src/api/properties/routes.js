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
  // #swagger.tags = ['Properties']
  // #swagger.description = 'Return property price.'
  //#swagger.parameters['quantity'] = { description: 'Quantity of meters in property.', type: 'number' }
  /* #swagger.responses[200] = {
    schema: { propertyPrice: 573.4045852575351},
    description: 'Property price found.'
  } */
  /* #swagger.responses[400] = {
    schema: { message: 'Error to find property price.' },
    description: 'Error to get property price.'
  } */
)

export { propertiesRouter }
