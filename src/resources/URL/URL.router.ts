import { Router } from 'express'
import { redirect, createURL } from './URL.controllers'

const router = Router()

router.route('/').post(createURL)
router.route('/:id').get(redirect)

export default router
