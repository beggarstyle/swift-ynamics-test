import * as mongoose from 'mongoose';

export const FormUsersSchema = new mongoose.Schema({
  form_id: mongoose.Types.ObjectId,
  user_id: mongoose.Types.ObjectId,
  approved: Boolean
}, { collection: 'form_users_approve' })
