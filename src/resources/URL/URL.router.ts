import { Router } from 'express'

const router = Router()

router
  .route('/:id')
  .get(/* TODO: add redirect */)

export default router
