import mongoose, { Document, Schema } from 'mongoose'

export interface INews extends Document {
  title: string | null
  description: string | null
  lable: string | null
  image: string | null
}

const newSchema = new Schema<INews>(
  {
    title: { type: String, required: false },
    description: { type: String, required: false },
    lable: { type: String, required: true},
    image: { type: String, required: false },
  },
  { versionKey: false, timestamps: true }
)

export const News =
  mongoose.models.News || mongoose.model<INews>('News', newSchema)
