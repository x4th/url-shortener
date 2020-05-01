import winston from 'winston'

const options: winston.LoggerOptions = {
  transports: [
    new winston.transports.Console({
      level: process.env.NODE_ENV === 'production' ? 'error' : 'debug',
      format: winston.format.combine(
        winston.format.colorize(),
        winston.format.simple()
      ),
    }),
    new winston.transports.File({
      filename: 'logs/info.log' /* TODO: use env variable for log directory */,
      level: 'info',
    }),
  ],
}

const logger = winston.createLogger(options)

export default logger
