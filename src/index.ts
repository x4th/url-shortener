import fs from 'fs'
import path from 'path'
import dotenv from 'dotenv'
import express from 'express'
import cors from 'cors'
import { json } from 'body-parser'
import morgan from 'morgan'

import logger from './utils/logger'

if (fs.existsSync('.env')) {
  dotenv.config()
  logger.debug('Using the .env file to supply config environment variables')
}

import { connect } from './utils/db'
import config from './config'
import URLRouter from './resources/URL/URL.router'

const app = express()

app.use(cors())
app.use(json())
app.use(morgan('dev')) // TODO: change based on env

// register routers
app.get('/', (req: express.Request, res: express.Response) => {
  res.sendFile(path.join(__dirname + '/index.html'))
})
app.use('/api', URLRouter)

const start = async () => {
  try {
    await connect()
    app.listen(config.port, () => {
      console.log(`app on http://localhost:${config.port}/api`)
    })
  } catch (e) {
    console.log(e)
  }
}

start()
