import logger from './utils/logger'

export interface Config {
  env: string
  port: number
  dbURI: string
}

const env = process.env.NODE_ENV || 'development'
const port = process.env.PORT ? parseInt(process.env.PORT, 10) : 5000

const envsThatMustBeSet = ['MONGODB_URI'] as Array<string>

envsThatMustBeSet.forEach((envName: string) => {
  if (!process.env[envName]) {
    logger.error(`Set ${envName} environment variable.`)
    process.exit(1)
  }
})

export default {
  env,
  port,
  dbURI: process.env.MONGODB_URI,
} as Config
