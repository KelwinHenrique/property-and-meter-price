import { Router } from 'express'

const router = new Router()

router.use('/property-value', () => console.log('Price property'))

export default router
