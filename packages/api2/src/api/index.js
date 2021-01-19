import { Router } from 'express'
import { propertiesRouter } from './properties'

const router = new Router()

router.use('/properties', propertiesRouter)

export default router
