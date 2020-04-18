import logger from '../utils/logger'

const env = process.env.NODE_ENV || 'development'
const port = process.env.PORT ? parseInt(process.env.PORT, 10) : 3000

if (!process.env.MONGODB_URI) {
  logger.error("No mongo connection string. Set MONGODB_URI environment variable.")
  process.exit(1)
}

interface Config {
  env: string
  isDev: boolean
  port: number
  dbUrl: string
}

const baseConfig: Config = {
  env,
  isDev: env === 'development',
  port: port,
  dbUrl: process.env.MONGODB_URI
}

let config = {}

switch (env) {
  case 'dev':
  case 'development':
    config = require('./dev').config
    break
  default:
    config = require('./dev').config
}

export default {...baseConfig, ...config}
