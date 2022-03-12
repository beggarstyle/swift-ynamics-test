import * as mongoose from 'mongoose';

export interface FormUsersInterface {
  form_id: mongoose.Types.ObjectId,
  user_id: mongoose.Types.ObjectId,
  approved: Boolean
}
