import mongoose from 'mongoose'
import options from '../config'

export const connect = (url = options.dbURI, opts = {}) => {
  return mongoose.connect(url, {
    ...opts,
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
}
