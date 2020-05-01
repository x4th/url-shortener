import mongoose, { mongo } from 'mongoose'

export type URLDocument = mongoose.Document & {
  target: string
  short: string
}

const URLSchema = new mongoose.Schema(
  {
    target: String,
    short: String,
  },
  { timestamps: true }
)

export const URL = mongoose.model<URLDocument>('URL', URLSchema)
