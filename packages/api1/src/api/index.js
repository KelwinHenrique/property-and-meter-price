import { Router } from 'express'
import { metersRouter } from './meters'

const router = new Router()

router.use('/meters', metersRouter)

export default router
