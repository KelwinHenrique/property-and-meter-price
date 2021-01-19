import { Router } from 'express'

const router = new Router()

router.use('/meter-value', () => console.log('Price meter'))

export default router
