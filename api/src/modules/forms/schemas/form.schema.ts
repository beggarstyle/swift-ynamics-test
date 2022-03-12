import * as mongoose from 'mongoose';

export const FormSchema = new mongoose.Schema({
  name: String,
  status: Boolean,
  approved: Boolean
}, { collection: 'forms' })
