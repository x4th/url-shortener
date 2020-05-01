import { Request, Response } from 'express'
import { URL } from './URL.model'
import { randomStringGenerator } from '../../utils/utils'
import logger from '../../utils/logger'
// import { CastError } from 'mongoose'

export const createURL = async (req: Request, res: Response) => {
  if (!req.url) {
    res.sendStatus(400)
    return
  }

  let url
  let randomString
  do {
    randomString = randomStringGenerator(5)
    url = await URL.findOne({ short: randomString })
  } while (url)

  url = await URL.create({ target: req.body.url, short: randomString })
  logger.log('debug', url.toString())
  res.json(url)
}

export const redirect = async (req: Request, res: Response) => {
  try {
    const url = await URL.findById(req.params.id).lean().exec()
    if (!url) {
      res.sendStatus(404)
      return
    }
    res.redirect(303, url.target)
  } catch (e) {
    console.log(e)
    if (e.name === 'CastError') res.sendStatus(400)
  }
}
